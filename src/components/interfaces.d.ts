interface ContextInterface {
  launches: ILaunch[];
  item?: string;
  loading: boolean;
  i?: number;
}

interface LaunchInterface {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_success: boolean;
  details: string;
  links: {
    flickr_images: string[];
    mission_patch_small: string;
    reddit_campaign: string;
    reddit_launch: string;
    reddit_recovery: string;
    reddit_media: string;
    presskit: string;
    article_link: string;
    wikipedia: string;
    youtube_id: number;
  };
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  launch_site: {
    site_name: string;
    launch?: string;
  };
}
