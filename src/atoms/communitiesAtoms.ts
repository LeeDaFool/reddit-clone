import { Timestamp } from "firebase/firestore";
import { atom, atomFamily } from "recoil";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: 'public' | 'restriced' | 'private';
  createdAt?: Timestamp;
  imageURL?: string;
}

export interface CommunitySnippets {
  communityId: string;
  isModerator?: boolean;
  imageURL?: string;
}

interface CommunityState {
  mySnippets: CommunitySnippets[];
  // visitedCommunities
}

const defaultCommuintyState: CommunityState = {
  mySnippets: []
}

export const communityState = atom<CommunityState>({
  key: 'communitiesState',
  default: defaultCommuintyState
})