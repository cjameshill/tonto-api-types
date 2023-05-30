import { Gender } from "./general.interface";

/**
 * Represents a user.
 */
export interface User {
    /**
     * The ID of the user. A MongoDB ObjectId is used for this field.
     */
    id: string;

    /**
     * The username of the user.
     */
    userName: string;

    /**
     * The profile image URL of the user. This includes the full URL for the image.
     */
    profileImg: string;

    /**
     * Indicates whether the user is verified.
     * - 0: Not verified
     * - 1: Verified
     */
    isUserVerified: number;

    /**
     * The gender of the user.
     * Possible values: "male", "female", "not-to-say".
     */
    gender: Gender;

    /**
     * An array of user badges.
     */
    userbadges: any[];

    /**
     * An optional array of user badge names.
     * - null: If the user has no badge names.
     * - string[]: Array of badge names.
     */
    userBadgeNames: null | string[];

    /**
     * The count of posts made by the user.
     */
    userPostsCount: number;

    /**
     * The count of followers of the user.
     */
    followersCount: number;
}
