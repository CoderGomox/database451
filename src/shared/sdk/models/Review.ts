/* tslint:disable */

declare var Object: any;
export interface ReviewInterface {
  "date": Date;
  "rating"?: number;
  "comments": string;
  "pub_id"?: number;
  "coffeeshopid"?: number;
  "id"?: number;
}

export class Review implements ReviewInterface {
  "date": Date;
  "rating": number;
  "comments": string;
  "pub_id": number;
  "coffeeshopid": number;
  "id": number;
  constructor(data?: ReviewInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Review`.
   */
  public static getModelName() {
    return "Review";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Review for dynamic purposes.
  **/
  public static factory(data: ReviewInterface): Review{
    return new Review(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Review',
      plural: 'Reviews',
      path: 'Reviews',
      idName: 'id',
      properties: {
        "date": {
          name: 'date',
          type: 'Date'
        },
        "rating": {
          name: 'rating',
          type: 'number'
        },
        "comments": {
          name: 'comments',
          type: 'string'
        },
        "pub_id": {
          name: 'pub_id',
          type: 'number'
        },
        "coffeeshopid": {
          name: 'coffeeshopid',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
