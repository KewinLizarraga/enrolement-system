import { Logger, NotFoundException } from '@nestjs/common';
import { FilterQuery, Model, Types, UpdateQuery } from 'mongoose';
import { AbstractDocument } from './abstract.schema';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger;
  constructor(protected readonly model: Model<TDocument>) {}

  async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    const createDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });
    await createDocument.save();
    return createDocument;
  }

  async find(
    filterQuery: FilterQuery<TDocument>,
    populateParameters: any,
  ): Promise<TDocument[]> {
    return await this.model
      .find(filterQuery)
      .populate([...populateParameters])
      .lean<TDocument[]>(true);
  }

  async findOne(
    filterQuery: FilterQuery<TDocument>,
    populateParametes: any,
  ): Promise<TDocument> {
    const document = await this.model
      .findOne(filterQuery)
      .populate([...populateParametes])
      .lean<TDocument>(true);

    if (!document) {
      this.logger.warn(
        'Document was not found with filterQuery: ',
        filterQuery,
      );
      throw new NotFoundException('Document was not found');
    }

    return document;
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
    populateParameters: any,
  ): Promise<TDocument> {
    const document = await this.model
      .findOneAndUpdate(filterQuery, update, {
        new: true,
      })
      .populate([...populateParameters])
      .lean<TDocument>(true);

    if (!document) {
      this.logger.warn(
        'Document was not found with filterQuery: ',
        filterQuery,
      );
      throw new NotFoundException('Document was not found');
    }

    return document;
  }

  async findOneAndDelete(
    filterQuery: FilterQuery<TDocument>,
    populateParameters: any,
  ): Promise<TDocument> {
    const document = await this.model
      .findOneAndDelete(filterQuery)
      .populate([...populateParameters])
      .lean<TDocument>(true);
    return document;
  }
}
