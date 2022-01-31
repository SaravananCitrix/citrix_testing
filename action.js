async function UsersFullSync({ dataStore, client }) {
  console.log(" sync started");
  const responsedata = await client.fetch("admin/directory/v1/users?customer=my_customer&projection=full&viewType=admin_view");
    //console.log(JSON.stringify(responsedata));
    if (!responsedata.ok) {
      throw new Error(
        `Accounts sync failed ${responsedata.status}:${responsedata.statusText}.`
      );
    }
  let data=await responsedata.json();
 console.log(JSON.stringify(data));
 
for (let user of data.users){
         // console.log(user);
          let user_data={
            agreed_to_terms: user.agreedToTerms,
            archived:user.archived,
            change_password_at_next_login:user.changePasswordAtNextLogin,
            cocustomer_id:user.customerId,
            etag:user.etag,
            id:user.id,
            include_in_global_address_list:user.includeInGlobalAddressList,
            is_admin:user.isAdmin,
            is_enforced_in_2_sv:user.isEnforcedIn2Sv,
            is_mailbox_setup:user.isMailboxSetup,
            kind:user.kind,
            name_family_name:user.name.familyName,
            name_full_name:user.name.fullName,
            nname_given_name:user.name.givenName,
            org_unit_path:user.orgUnitPath,
            primary_email:user.primaryEmail,
            recovery_email:user.recoveryEmail,
            suspended:user.suspended,
            };dataStore.save("users",user_data );

       
        }
        
       
}

integration.define({
  synchronizations: [
    {
      name: "GoogleCalender",
      fullSyncFunction: UsersFullSync,
    },
  ],

  model: {
    tables: [
      {
        name: "users",
        columns: [
          {
            name: "agreed_to_terms",
            type: "BOOLEAN",
          },
          {
            name: "archived",
            type: "BOOLEAN",
          },
          {
            name: "change_password_at_next_login",
            type: "BOOLEAN",
          },

          {
            name: "cocustomer_id",
            type: "STRING",
            length: 255,
          },
          {
            name: "etag",
            type: "STRING",
            length: 255,
          },
          {
            name: "id",
            type: "STRING",
            length: 255,
            primaryKey: true,
          },
          {
            name: "include_in_global_address_list",
            type: "BOOLEAN",
          },
         
          {
            name: "is_admin",
            type: "BOOLEAN",
          },
         
          {
            name: "is_enforced_in_2_sv",
            type: "BOOLEAN",
          },
        
          {
            name: "is_mailbox_setup",
            type: "BOOLEAN",
          },
          {
            name: "kind",
            type: "STRING",
            length: 255,
          },

          {
            name: "name_family_name",
            type: "STRING",
            length: 255,
          },
          {
            name: "name_full_name",
            type: "STRING",
            length: 255,
          },
          {
            name: "nname_given_name",
            type: "STRING",
            length: 255,
          },
          {
            name: "org_unit_path",
            type: "STRING",
            length: 255,
          },
          {
            name: "primary_email",
            type: "STRING",
            length: 255,
            
          },
          {
            name: "recovery_email",
            type: "STRING",
            length: 255,
          },
          {
            name: "suspended",
            type: "BOOLEAN",
          },
        ],

        // name: 'events',
        // columns: [
        //     {
        //         name: 'conference_data_conference_id',
        //         type: 'STRING',
        //         length: 255
        //     },
        //     {
        //         name: 'conference_data_conference_solution_icon_uri',
        //         type: 'STRING',
        //         length: 255
        //     },
        //     {
        //         name: 'conference_data_conference_solution_key_type',
        //         type: 'STRING',
        //         length: 255
        //     },
        //     {
        //         name: 'conference_data_conference_solution_name',
        //         type: 'STRING',
        //         length: 255
        //     },
        //     {
        //         name: 'conference_data_signature',
        //         type: 'STRING',
        //         length: 255
        //     },
        //     {
        //         name: 'created',
        //         type: 'TIMESTAMP'

        //     },
        //     {
        //         name: 'creator_display_name',
        //         type: 'STRING',
        //         length: 255
        //     },
        //     {
        //         name: 'creator_email',
        //         type: 'STRING',
        //         length: 255
        //     },
        //     {
        //         name: 'creator_self',
        //         type: 'STRING',
        //         length: 255
        //     },
        //     {
        //         name: 'description',
        //         type: 'STRING',
        //         length: 255
        //     },
        //     {
        //         name: 'end_date',
        //         type: 'TIMESTAMP'

        //     },
        //     {
        //         name: 'end_date_time',
        //         type: 'TIMESTAMP'

        //     },
        //     {
        //         name: 'end_time_zone',
        //         type: 'TIMESTAMP',
        //         length: 255
        //     },
        //     {
        //         name: 'etag',
        //         type: 'STRING',
        //         length: 255
        //     },
        //     {
        //         name: 'guests_can_invite_others',
        //         type: 'BOOLEAN'

        //     },
        //     {
        //         name: 'guests_can_modify',
        //         type: 'BOOLEAN'

        //     },
        //     {
        //         name: 'guests_can_see_other_guests',
        //         type: 'BOOLEAN'

        //     },
        //     {
        //         name: 'hangout_link',
        //         type: 'STRING',
        //         length: 255

        //     },
        //     {
        //         name: 'html_link',
        //         type: 'STRING',
        //         length: 255

        //     },
        //     {
        //         name: 'i_cal_uid',
        //         type: 'STRING',
        //         length: 255

        //     },
        //     {
        //         name: 'id',
        //         type: 'STRING',
        //         length: 255

        //     },
        //     {
        //         name: 'kind',
        //         type: 'STRING',
        //         length: 255

        //     },
        //     {
        //         name: 'location',
        //         type: 'STRING',
        //         length: 255

        //     },
        //     {
        //         name: 'organizer_display_name',
        //         type: 'STRING',
        //         length: 255

        //     },
        //     {
        //         name: 'organizer_email',
        //         type: 'BOOLEAN',

        //     },
        //     {
        //         name: 'organizer_self',
        //         type: 'STRING',
        //         length: 255

        //     },
      },
    ],
    actions: [
      {
        name: "events",
        columns: [
          {
            name: "date",
            type: "STRING",
          },
          {
            name: "recurrence3",
            type: "STRING",
          },
          {
            name: "recurrence2",
            type: "STRING",
          },
          {
            name: "recurrence1",
            type: "STRING",
          },
          {
            name: "conferenceDataVersion",
            type: "INTEGER",
          },
          {
            name: "timezone",
            type: "STRING",
          },
          {
            name: "description",
            type: "STRING",
          },
          {
            name: "recurrenceType",
            type: "STRING",
          },
          {
            name: "when",
            type: "DATETIME",
          },
          {
            name: "email3",
            type: "STRING",
          },
          {
            name: "email2",
            type: "STRING",
          },
          {
            name: "datetime",
            type: "STRING",
          },
          {
            name: "email1",
            type: "STRING",
          },
          {
            name: "guestCanModify",
            type: "STRING",
          },
          {
            name: "guestCanSeeOtherGuests",
            type: "STRING",
          },
          {
            name: "requestId",
            type: "DATETIME",
          },
          {
            name: "byDay",
            type: "STRING",
          },
          {
            name: "end_datetime_val",
            type: "STRING",
          },
          {
            name: "email6",
            type: "STRING",
          },
          {
            name: "email5",
            type: "STRING",
          },
          {
            name: "email4",
            type: "STRING",
          },
          {
            name: "summay",
            type: "STRING",
          },
          {
            name: "attendee6",
            type: "STRING",
          },
          {
            name: "end_date_val",
            type: "STRING",
          },
          {
            name: "attendee5",
            type: "STRING",
          },
          {
            name: "attendee4",
            type: "STRING",
          },
          {
            name: "attendee3",
            type: "STRING",
          },
          {
            name: "attendee2",
            type: "STRING",
          },
          {
            name: "bymonth",
            type: "DATETIME",
          },
          {
            name: "attendee1",
            type: "STRING",
          },
          {
            name: "end_time",
            type: "STRING",
          },
          {
            name: "UNTIL",
            type: "DATETIME",
          },
          {
            name: "sendupdates",
            type: "STRING",
          },
          {
            name: "start_time",
            type: "STRING",
          },
          {
            name: "byMonthT",
            type: "DATETIME",
          },
          {
            name: "calenderId",
            type: "STRING",
          },
          {
            name: "updtedMin",
            type: "DATETIME",
          },
          {
            name: "start_date_val",
            type: "STRING",
          },
          {
            name: "start_datetime_val",
            type: "STRING",
          },
          {
            name: "interval",
            type: "STRING",
          },
          {
            name: "location",
            type: "STRING",
          },
          {
            name: "datetime_timezone",
            type: "STRING",
          },
          {
            name: "guestsCanInviteOthers",
            type: "STRING",
          },
        ],

        relationships: [
          {
            name: "nested_table_4",
            primaryTable: "events",
            foreignTable: "events_attachments",
            columnPairs: [
              {
                primaryKey: "Id",
                foreignKey: "parent_id",
              },
            ],
          },
          {
            name: "nested_table_1",
            primaryTable: "events",
            foreignTable: "events_attendees",
            columnPairs: [
              {
                primaryKey: "Id",
                foreignKey: "parent_id",
              },
            ],
          },
          {
            name: "nested_table_2",
            primaryTable: "events",
            foreignTable: "events_conference_data_en",
            columnPairs: [
              {
                primaryKey: "Id",
                foreignKey: "parent_id",
              },
            ],
          },
          {
            name: "nested_table_3",
            primaryTable: "events",
            foreignTable: "events_reccurrence",
            columnPairs: [
              {
                primaryKey: "Id",
                foreignKey: "parent_id",
              },
            ],
          },
        ],
      },
    ],
  },
});
