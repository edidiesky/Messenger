export type feedcardtype = {
    quote_tweet_id: any;

    _id: string;
    user_id: number;
    username: string;
    tweet_text: string;
    // hashtags: string;
    timestamp: string;
    retweet_count: number;
    favorite_count: number;
    is_verified: boolean;
    tweet_image: string[];
    tweet_likes:string[];
    image: string;
    location: string;
    profile_name: string;
    createdAt?: string;
    tweet_user_id:{
        _id:string;
        display_name: string;
        name: string;
        bio:string;
        profile_image_url:string;
        tweet_text:string;
        
    },
    quote_user_id: {
        _id: string;
        display_name: string;
        name: string;
        bio: string;
        profile_image_url: string;
        tweet_text: string;

    }
}