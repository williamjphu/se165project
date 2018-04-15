<template>
  <v-container style="max-width: 1200px" py-0 px-0>
    <section>
      <v-container d-flex class="text-xs-center">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <v-card class="primary--text" color="brown darken-2 flat" >
              <v-card-text class="text-xs-center headline" style="text-shadow: 1px 1px #111111; color:white;">
                 Got a Questions  <v-icon x-large left color="white">help</v-icon>  We've Got Answers.
              </v-card-text>
              <hr><hr>

                <v-card-text class="text-xs-left title" style="text-shadow: 1px 1px #111111; color: white">
                To save your time ,We've put answers to the most common inquiries here.Just click on the category and look for your question.
              </v-card-text>
            </v-card>
            <template>
              <v-expansion-panel>
                <v-expansion-panel-content v-for="pc in categories" :key="pc.id">
                  <div slot="header" class="title">{{pc.title}}</div>
                  <v-card>

                        <template>
                          <v-expansion-panel popout light focusable>
                            <v-expansion-panel-content v-for="q in pc.questions" :key="q.id">
                              <div slot="header" class="title">{{q.question}}</div>
                              <v-card>

                                <template>
                                   <v-layout row>
                                      <v-flex xs12>
                                          <v-card v-for="a in q.answers" :key="a.id">
                                            <v-card v-if="a.text" dark color="primary">
                                              <v-card-text class="title">{{a.text}}</v-card-text>
                                            </v-card>
                                            <v-card light  v-for="opt in a.options" :key="opt">
                                              <v-card-text class="subheading"> <v-icon left color="blue darken-4">forward</v-icon> {{opt}}</v-card-text>
                                               <v-divider></v-divider>
                                            </v-card>
                                          </v-card>
                                      </v-flex>
                                   </v-layout>
                                </template>

                             </v-card>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </template>

                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </template>


          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-container>
</template>

<script>
  import json from '@/assets/faqs.json'
  export default {
    data () {
      return {
        categories: json.faqs
      }
    },
    computed: {
      // Any variables that need to be dynamically recomputed go in here
    }
  }
</script>
