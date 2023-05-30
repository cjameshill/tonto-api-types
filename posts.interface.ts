import {
    Duration,
    EpochTimestamp,
    Language,
    Liked,
    Timestamp,
    YesNo,
} from "./general.interface";
import { User } from "./user.interface";

export enum PostStatus {
    active = "active",
    inProgress = "inprogress",
    failed = "failed",
}

/**
 * Represents the JSON object.
 */
export interface Post {
    /**
     * The unique identifier of the graph.
     */
    graphId: number;

    /**
     * The UUID of the object. The MongoDB ObjectId is used for this field.
     */
    uuid: string;

    /**
     * The number of likes.
     */
    liked: Liked;

    /**
     * The number of shares.
     * --------- DEPRECATED ----------
     */
    shared: number;

    /**
     * The number of times played.
     * --------- DEPRECATED ----------
     */
    played: number;

    /**
     * The number of times marked as favorite.
     * --------- DEPRECATED ----------
     */
    favourite: number;

    /**
     * The URLs for downloading the audio.
     */
    downloadUrl: string[];

    /**
     * The URLs for streaming the audio.
     */
    streamingUrl: string[];

    /**
     * The visibility status ('yes' or 'no').
     */
    visibility: YesNo;

    /**
     * Indicates whether the content has explicit content (0 for no, 1 for yes).
     */
    hasExplicitContent: number;

    /**
     * The description of the object.
     */
    description: string;

    /**
     * The full filename (or null if not available).
     */
    fullFilename: null | string;

    /**
     * The duration of the audio.
     */
    duration: Duration;

    /**
     * The pad duration in seconds.
     */
    padDuration: number;

    /**
     * Indicates whether the audio is available for download ('yes' or 'no').
     */
    availToDownload: YesNo;

    /**
     * Details about the explicit content.
     */
    explicit: {
        content: YesNo;
        violence: YesNo;
        badWords: YesNo;
        sex: YesNo;
        others: YesNo;
    };

    /**
     * The date and time when the object was last updated.
     */
    updatedAt: Timestamp;

    /**
     * The date and time when the object was created.
     */
    createdAt: Timestamp;

    /**
     * The audio date and time.
     */
    audioDate: Timestamp;

    /**
     * The epoch timestamp when the object was created.
     */
    createdAtEpoch: EpochTimestamp;

    /**
     * The language of the audio.
     */
    language: Language;

    /**
     * The languages associated with the audio.
     */
    languages: string[];

    /**
     * The number of comments.
     */
    commentsCount: number;

    /**
     * The number of likes.
     */
    likesCount: number;

    /**
     * The number of times played.
     */
    playCount: number;

    /**
     * The number of shares.
     */
    shareCount: number;

    /**
     * Indicates whether the notification is muted (0 for no, 1 for yes).
     */
    muteNotification: number;

    /**
     * The status of the object.
     */
    status: PostStatus;

    /**
     * An array of users who liked the audio.
     */
    likedBy: {
        id: string;
        userName: string;
        profileImg: string;
    }[];

    /**
     * An array of users who liked the audio and are being followed.
     */
    followingLikedUsers: any[];

    /**
     * The query data.
     */
    queryData: {
        requester: string;
        limit: number;
        skip: number;
        type: string;
        userId: string;
    };

    /**
     * Related interests.
     */
    relatedInterests: string[];

    /**
     * Information about the user.
     */
    userInfo: User;
}
