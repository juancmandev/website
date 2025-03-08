import PocketBase from 'pocketbase';
import type { RecordService } from 'pocketbase';

export enum Collections {
  Microblogs = 'microblogs',
  Tags = 'tags',
  Users = 'users',
}

export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

export type BaseSystemFields<T = never> = {
  id: RecordIdString;
  created: IsoDateString;
  updated: IsoDateString;
  collectionId: string;
  collectionName: Collections;
  expand?: T;
};

export type AuthSystemFields<T = never> = {
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
} & BaseSystemFields<T>;

export type MicroblogsRecord = {
  content?: string;
  published: IsoDateString;
  tags?: RecordIdString[];
};

export type TagsRecord = {
  name?: string;
};

export type UsersRecord = {
  avatar?: string;
  name?: string;
};

export type MicroblogsResponse<Texpand = unknown> = Required<MicroblogsRecord> &
  BaseSystemFields<Texpand>;
export type TagsResponse<Texpand = unknown> = Required<TagsRecord> &
  BaseSystemFields<Texpand>;
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> &
  AuthSystemFields<Texpand>;

export type CollectionRecords = {
  microblogs: MicroblogsRecord;
  tags: TagsRecord;
  users: UsersRecord;
};

export type CollectionResponses = {
  microblogs: MicroblogsResponse;
  tags: TagsResponse;
  users: UsersResponse;
};

export type TypedPocketBase = PocketBase & {
  collection(idOrName: 'microblogs'): RecordService<MicroblogsResponse>;
  collection(idOrName: 'tags'): RecordService<TagsResponse>;
  collection(idOrName: 'users'): RecordService<UsersResponse>;
};

export function createServerClient(url: string) {
  if (!url) {
    throw new Error('Pocketbase API url not defined!');
  }

  if (typeof window !== 'undefined') {
    throw new Error(
      'This method is only supposed to call from the Server environment'
    );
  }

  const client = new PocketBase(url) as TypedPocketBase;

  return client;
}
