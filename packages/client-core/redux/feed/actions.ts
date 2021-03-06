import {
  FEEDS_RETRIEVED,
  FEED_RETRIEVED,
  FEEDS_FETCH,
  FEEDS_FEATURED_RETRIEVED,
  ADD_FEED_FIRES,
  REMOVE_FEED_FIRES,
  ADD_FEED_BOOKMARK,
  REMOVE_FEED_BOOKMARK,
  ADD_FEED_VIEW,
  ADD_FEED
} from '../actions';
import { FeedShort, Feed } from '@xr3ngine/common/interfaces/Feed';

export interface FeedsRetrievedAction {
  type: string;
  feeds: FeedShort[];
}

export interface FeedRetrievedAction {
  type: string;
  feed: Feed;
}

export interface FetchingFeedsAction {
  type: string;
}

export interface oneFeedAction {
  type: string;
  feedId: string;
}

export type FeedsAction =
FeedsRetrievedAction
  | FeedRetrievedAction
  | FetchingFeedsAction
  | oneFeedAction

export function feedsRetrieved (feeds: Feed[]): FeedsRetrievedAction {
  return {
    type: FEEDS_RETRIEVED,
    feeds: feeds
  };
}

export function feedsFeaturedRetrieved (feeds: FeedShort[]): FeedsRetrievedAction {
  return {
    type: FEEDS_FEATURED_RETRIEVED,
    feeds: feeds
  };
}

export function feedRetrieved (feed: Feed): FeedRetrievedAction {
  return {
    type: FEED_RETRIEVED,
    feed: feed
  };
}


export function fetchingFeeds (): FetchingFeedsAction {
  return {
    type: FEEDS_FETCH
  };
}

export function addFeedFire (feedId:string) : oneFeedAction{
  return {
    type: ADD_FEED_FIRES,
    feedId: feedId
  };
} 

export function removeFeedFire (feedId:string) : oneFeedAction{
  return {
    type: REMOVE_FEED_FIRES,
    feedId
  };
} 

export function addFeedBookmark (feedId:string) : oneFeedAction{
  return {
    type: ADD_FEED_BOOKMARK,
    feedId: feedId
  };
} 

export function removeFeedBookmark (feedId:string) : oneFeedAction{
  return {
    type: REMOVE_FEED_BOOKMARK,
    feedId
  };
} 

export function addFeedView (feedId:string) : oneFeedAction{
  return {
    type: ADD_FEED_VIEW,
    feedId: feedId
  };
} 

export function addFeed(feed:Feed): FeedRetrievedAction{
  return {
    type: ADD_FEED,
    feed: feed
  };
}