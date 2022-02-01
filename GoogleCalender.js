async function UsersFullSync({ dataStore, client }) {
 // console.log(" sync started");
  const responsedata = await client.fetch("admin/directory/v1/users?customer=my_customer&projection=full&viewType=admin_view");
    //console.log(JSON.stringify(responsedata));
    if (!responsedata.ok) {
      throw new Error(
        `Accounts sync failed ${responsedata.status}:${responsedata.statusText}.`
      );
    }
 // let data=await responsedata.json();
// console.log(JSON.stringify(data));
 
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
             };
             dataStore.save("users",user_data );

       
         }
        
       
}
async function events({dataStore, client}){
  console.log(" sync startedddd");
 // console.log(client);
  const responsedata2 = await client.fetch("calendar/v3/calendars/elisa.rayne@wsiappfactory.com/events?maxResults=50&showDeleted=false&singleEvents=true&orderBy=startTime");

    //console.log(JSON.stringify(responsedata2));
    if (!responsedata2.ok) {
      throw new Error(
        `Accounts sync failed ${responsedata2.status}:${responsedata2.statusText}.`
      );
    }
    let data2=await responsedata2.json();
    //console.log(JSON.stringify(data2));
    
    for (let ev of data2.events){
             //console.log(ev);
              let user_data2={
                kind: ev.kind,
                etag:ev.etag,
                summary:ev.summary,
                updated:ev.updated,
                timezone:ev.timeZone,
               status:ev.items.status,
                id:ev.items.id,
                htmllink:ev.items.htmlLink,
               created:ev.items.created,
                updated1:ev.items.updated,
                summary1:ev.items.summary,
                description:ev.items.description,
                creator:ev.items.creator.email,
                organizer: ev.items.organizer.email,
                startdatetime:ev.items.start.dateTime,
                starttimezone:ev.items.start.timeZone,
                end:ev.items.end.dateTime,
                endtimezone:ev.items.end.timeZone,
                iCalUID:ev.items.iCalUID,
                sequence:ev.items.sequence,
                attendees:ev.items.attendees.email,
                resstatus:ev.items.attendees.responseStatus,
                guestcanmodify:ev.items.guestsCanModify,
                recurringevent:ev.items.recurringEventId,
                };
                dataStore.save("events",user_data2);}
}

async function create_events({ client, dataStore }) {
 const payload= {
   "end": {
    "date": "2022-02-17",
        "datetime": "2022-02-17T09:00:00-0500",
        "timeZone": "Europe/Zurich"
      },
      "start": {
        "date": "2022-02-17",
        "datetime": "2022-02-17T09:00:00-0500",
        
        "timeZone": "Europe/Zurich"
      },
      "summary": "training for script"
        
    
}

  const response = await client.fetch((`calendar/v3/calendars/elisa.rayne@wsiappfactory.com/events?sendUpdates=all&conferenceDataVersion=0`), {
      method: "POST",
      body:JSON.stringify(payload)
      
  })
  .then((response)=>
  {
    response.json();
    console.log(JSON.stringify(response));
events(dataStore,client)
  })
  

  
}
integration.define({
  synchronizations: [
    {
      name: "GoogleCalender",
      fullSyncFunction: create_events
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
            name: "customer_id",
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

         name: 'events',
         columns: [
             {
                 name: 'summary',
                type: 'STRING',
                length: 255
             },
             {
              name: 'recurringevent',
             type: 'STRING',
             length: 255
          },
             {
              name: 'updated',
                type: 'DATETIME',
                 
             },
             {
                 name: 'timezone',
                type: 'STRING',
               length: 255
             },
            
           
           {
                 name: 'created',
                 type: 'DATETIME'

             },
             {
                 name: 'status',
                type: 'STRING',
                 length: 255
             },
             {
                 name: 'creator',
                type: 'STRING',
                 length: 255
             },
             {
                 name: 'id',
                 type: 'STRING',
                 length: 255,
                 primaryKey: true,
             },
             {
                 name: 'description',
                 type: 'STRING',
                 length: 1000
             },
           {
                 name: 'end',
                 type: 'DATETIME'

            },
             {
                 name: 'iCalUid',
                 type: 'STRING',
                 length: 255

             },
             {
                 name: 'endtimezone',
                 type: 'STRING',
                 length: 255
                 
            },
            {
                 name: 'etag',
                 type: 'STRING',
                 length: 255
             },
             
           {
                 name: 'updated1',
                 type: 'DATETIME'
                 

             },
             {
               name: 'summary1',
                 type: 'STRING',
                 length: 255

             },
           
             {
                name: 'htmllink',
                 type: 'STRING',
                 length: 255

             },
            
            
             {
                 name: 'kind',
                 type: 'STRING',
                 length: 255

             },
           
            
             {
                 name: 'organizer',
                 type: 'STRING',
                 length: 255,

             },
            {
                  name: 'startdatetime',
                type: 'DATETIME',
                
                },
               {
                  name: 'starttimezone',
                type: 'STRING',
                length: 255},
              
                {
                  name: 'sequence',
                type: 'INTEGER',
                },
                {
                  name: 'attendees',
                type: 'STRING',
                length: 255},
                {
                  name: 'resstatus',
                type: 'STRING',
                length: 255},
                {
                  name: 'guestcanmodify',
                type: 'BOOLEAN',
                },

              ],
      
            },
          ],
        actions: [
      {
        name: "create_events",
        Parameters: [
          {
            name: "date",
            type: "STRING",
          },
         
          
         
          {
            name: "timezone",
            type: "STRING",
          },
         
          
          {
            name: "datetime",
            type: "STRING",
          },
         
         
          
          {
            name: "end_datetime_val",
            type: "STRING",
          },
         
          {
            name: "summary",
            type: "STRING",
          },
         
          {
            name: "end_date_val",
            type: "STRING",
          },
         {
            name: "end_time",
            type: "STRING",
          },
        
          {
            name: "start_time",
            type: "STRING",
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
            name: "datetime_timezone",
            type: "STRING",
          },
         
        ],
        
      },
    ],
      

      /*  relationships: [
          {
            name: "nested_table_4",
            primaryTable: "events",
            foreignTable: "events_attachments",
            columnPairs: [
              {
                primaryKey: "id",
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
                primaryKey: "id",
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
                primaryKey: "id",
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
                primaryKey: "id",
                foreignKey: "parent_id",
              }
            ]
          }
        ]*/
      }
      });