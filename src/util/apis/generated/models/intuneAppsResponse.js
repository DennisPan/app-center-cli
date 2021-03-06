/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the IntuneAppsResponse class.
 * @constructor
 * IntuneAppsResponse
 *
 * @member {string} [createdMonth] PartitionKey year-month
 * 
 * @member {string} [appId] App id
 * 
 * @member {string} [refreshStatus] Refresh Status
 * 
 */
function IntuneAppsResponse() {
}

/**
 * Defines the metadata of IntuneAppsResponse
 *
 * @returns {object} metadata of IntuneAppsResponse
 *
 */
IntuneAppsResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'IntuneAppsResponse',
    type: {
      name: 'Composite',
      className: 'IntuneAppsResponse',
      modelProperties: {
        createdMonth: {
          required: false,
          serializedName: 'created_month',
          type: {
            name: 'String'
          }
        },
        appId: {
          required: false,
          serializedName: 'app_id',
          type: {
            name: 'String'
          }
        },
        refreshStatus: {
          required: false,
          serializedName: 'refreshStatus',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = IntuneAppsResponse;
