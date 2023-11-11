export interface ProfileData {
    profile: {
      name: string;
      role: string;
      picture: string;
      followers: string;
      following: string;
      postcount: number;
    };
    postdescription: {
      posts: {
        [key: string]: {
          title: string;
          description: string;
          category: string;
          datepublished: string;
          timetoread: string;
          views: string;
        };
      };
    };
  }

  