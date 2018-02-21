<template>
<v-app>
<v-container fluid>
  <v-layout row>
    <v-flex xs8 pa-5>
      <v-card >
        <v-toolbar color="orange">
          
          <v-toolbar-title>Account Details</v-toolbar-title>
          <v-spacer></v-spacer>
          </v-toolbar>
        <v-list two-line>
          <v-list-tile>
          	<v-list-tile-title>Name: {name}
          	</v-list-tile-title>
          	 <v-dialog v-model="nameDialog" persistent max-width="500px">
      <v-btn color="orange" dark slot="activator">Edit Name</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Name</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="New first name" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="New last name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange" flat @click.native="nameDialog = false">Close</v-btn>
          <v-btn color="orange" flat @click.native="nameDialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-list-tile>
        </v-list>
        <v-list two-line>
          <v-list-tile>
          	<v-list-tile-title>Email: {email}
          	</v-list-tile-title>
          	<v-dialog v-model="emailDialog" persistent max-width="500px">
      <v-btn color="orange" dark slot="activator">Edit Email</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Email</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12>
                <v-text-field label="New email" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm12>
                <v-text-field label="Confirm new email" ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange" flat @click.native="emailDialog = false">Close</v-btn>
          <v-btn color="orange" flat @click.native="emailDialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-list-tile>
        </v-list> 
        <v-list two-line>
          <v-list-tile>
          	<v-list-tile-title>Password: Set
          	</v-list-tile-title>
          	<v-dialog v-model="passwordDialog" persistent max-width="500px">
      <v-btn color="orange" dark slot="activator">Edit Password</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Password</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12>
                <v-text-field label="Current Password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm12>
                <v-text-field label="New Password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm12>
                <v-text-field label="Confirm New Password" ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange" flat @click.native="passwordDialog = false">Close</v-btn>
          <v-btn color="orange" flat @click.native="passwordDialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-list-tile>
        </v-list> 
        
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</v-app>
</template>
<script>
  export default {
    data: () => ({
      nameDialog: false,
      emailDialog: false,
      passwordDialog: false
    })
  }
</script>