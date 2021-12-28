<template>
  <div>
    <v-form ref="FirstForm" @submit.prevent="UpdateAccount()" class="mb-5">
      <v-row v-if="User" dense>
        <v-col cols="6">
          <v-text-field
            v-model="User.name"
            :rules="nameValidation"
            :min="0"
            outlined
            label="Full Name"
            prepend-inner-icon="mdi-account"
            dense
          >
          </v-text-field>
        </v-col>
        <v-col cols="6"> </v-col>
        <v-col cols="6">
          <v-select
            v-model="User.timezone"
            :items="timezones"
            auto
            menu-props="auto"
            label="Timezone"
            prepend-icon="mdi-map-clock"
          ></v-select>
        </v-col>
        <v-col cols="12"
          ><v-btn type="submit" tile text class="red" dark
            >Update Account</v-btn
          ></v-col
        >
      </v-row>
    </v-form>

    <v-divider class="mb-5"></v-divider>
    <v-form ref="EmailUpdateForm" @submit.prevent="UpdateEmail()" class="mb-5">
      <v-row v-if="User" dense>
        <v-col cols="12">
          <span class="font-weight-bold"> Email <br /></span>
          <span>{{ User.email }}</span>
        </v-col>
        <v-col cols="12">
          <v-btn
            v-if="showEmailChangeForm == false"
            @click="showEmailChangeForm = !showEmailChangeForm"
            tile
            text
            class="grey"
            small
            dark
            >Chang Email</v-btn
          >
        </v-col>
        <template v-if="showEmailChangeForm">
          <v-col cols="6">
            <v-text-field
              v-model="userNewEmailAddress"
              :min="0"
              :rules="emailValidation"
              outlined
              label="New Email"
              prepend-inner-icon="mdi-email"
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="6"></v-col>
          <v-col cols="6">
            <v-text-field
              v-model="userCurrentPasswordEmail"
              :append-icon="
                userCurrentPasswordToggleEmail ? 'mdi-eye' : 'mdi-eye-off'
              "
              :rules="passwordValidation"
              :type="userCurrentPasswordToggleEmail ? 'text' : 'password'"
              :min="8"
              @click:append="
                userCurrentPasswordToggleEmail = !userCurrentPasswordToggleEmail
              "
              counter
              outlined
              label="Current Password"
              dense
              prepend-inner-icon="mdi-lock"
            ></v-text-field>
          </v-col>
          <v-col cols="12"
            ><v-btn type="submit" tile text class="red" dark
              >Update Email</v-btn
            ></v-col
          >
        </template>
      </v-row>
    </v-form>

    <v-divider class="mb-5"></v-divider>
    <v-form
      ref="PasswordUpdateForm"
      @submit.prevent="UpdatePassword()"
      class="mb-5"
    >
      <v-row v-if="User" dense>
        <v-col class="font-weight-bold" cols="12">
          Password
        </v-col>
        <v-col cols="12">
          <v-btn
            v-if="showPasswordChangeForm == false"
            @click="showPasswordChangeForm = !showPasswordChangeForm"
            tile
            text
            class="grey "
            small
            dark
            >Chang Password</v-btn
          >
        </v-col>
        <template v-if="showPasswordChangeForm">
          <v-col cols="6">
            <v-text-field
              v-model="userCurrentPassword"
              :append-icon="
                userCurrentPasswordToggle ? 'mdi-eye' : 'mdi-eye-off'
              "
              :rules="passwordValidation"
              :type="userCurrentPasswordToggle ? 'text' : 'password'"
              :min="8"
              @click:append="
                userCurrentPasswordToggle = !userCurrentPasswordToggle
              "
              counter
              outlined
              label="Current Password"
              dense
              prepend-inner-icon="mdi-lock"
            ></v-text-field>
          </v-col>
          <v-col cols="6"></v-col>
          <v-col cols="6">
            <v-text-field
              v-model="userNewPassword"
              :append-icon="userNewPasswordToggle ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordValidation"
              :type="userNewPasswordToggle ? 'text' : 'password'"
              :min="8"
              @click:append="userNewPasswordToggle = !userNewPasswordToggle"
              counter
              outlined
              label="New Password"
              dense
              prepend-inner-icon="mdi-lock"
            ></v-text-field>
          </v-col>
          <v-col cols="12"
            ><v-btn type="submit" tile text class="red" dark
              >Update Password</v-btn
            ></v-col
          >
        </template>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import User from '@/graphql/user/getUserData.gql'
import UpdateProfile from '@/graphql/user/UpdateProfile.gql'

export default {
  apollo: {
    User: {
      query: User,
      prefetch: false,
      fetchPolicy: 'cache-first'
    }
  },
  data() {
    return {
      // Email
      userNewEmailAddress: null,
      showEmailChangeForm: false,

      userCurrentPasswordEmail: null,
      userCurrentPasswordToggleEmail: false,

      // Password
      userCurrentPassword: null,
      userCurrentPasswordToggle: false,
      showPasswordChangeForm: false,

      // New Password
      userNewPassword: null,
      userNewPasswordToggle: false,

      // Timezone

      passwordValidation: [(v) => (v && v.length >= 8) || 'Min 8 characters'],
      nameValidation: [(v) => !!v || 'Name is required'],
      /* prettier-ignore */
      /* eslint-disable no-useless-escape */
      emailValidation: [
        (v) =>
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || 'Email must be valid'
      ],
      timezones: [
        'Africa/Abidjan',
        'Africa/Accra',
        'Africa/Addis_Ababa',
        'Africa/Algiers',
        'Africa/Asmara',
        'Africa/Bamako',
        'Africa/Bangui',
        'Africa/Banjul',
        'Africa/Bissau',
        'Africa/Blantyre',
        'Africa/Brazzaville',
        'Africa/Bujumbura',
        'Africa/Cairo',
        'Africa/Casablanca',
        'Africa/Ceuta',
        'Africa/Conakry',
        'Africa/Dakar',
        'Africa/Dar_es_Salaam',
        'Africa/Djibouti',
        'Africa/Douala',
        'Africa/El_Aaiun',
        'Africa/Freetown',
        'Africa/Gaborone',
        'Africa/Harare',
        'Africa/Johannesburg',
        'Africa/Juba',
        'Africa/Kampala',
        'Africa/Khartoum',
        'Africa/Kigali',
        'Africa/Kinshasa',
        'Africa/Lagos',
        'Africa/Libreville',
        'Africa/Lome',
        'Africa/Luanda',
        'Africa/Lubumbashi',
        'Africa/Lusaka',
        'Africa/Malabo',
        'Africa/Maputo',
        'Africa/Maseru',
        'Africa/Mbabane',
        'Africa/Mogadishu',
        'Africa/Monrovia',
        'Africa/Nairobi',
        'Africa/Ndjamena',
        'Africa/Niamey',
        'Africa/Nouakchott',
        'Africa/Ouagadougou',
        'Africa/Porto-Novo',
        'Africa/Sao_Tome',
        'Africa/Tripoli',
        'Africa/Tunis',
        'Africa/Windhoek',
        'America/Adak',
        'America/Anchorage',
        'America/AnguillaSandy Hill',
        'America/Antigua',
        'America/Araguaina',
        'America/Argentina/Buenos_Aires',
        'America/Argentina/Catamarca',
        'America/Argentina/Cordoba',
        'America/Argentina/Jujuy',
        'America/Argentina/La_Rioja',
        'America/Argentina/Mendoza',
        'America/Argentina/Rio_Gallegos',
        'America/Argentina/Salta',
        'America/Argentina/San_Juan',
        'America/Argentina/San_Luis',
        'America/Argentina/Tucuman',
        'America/Argentina/Ushuaia',
        'America/Aruba',
        'America/Asuncion',
        'America/Atikokan',
        'America/Bahia',
        'America/Bahia_Banderas',
        'America/Barbados',
        'America/Belem',
        'America/Belize',
        'America/Blanc-Sablon',
        'America/Boa_Vista',
        'America/Bogota',
        'America/Boise',
        'America/Cambridge_Bay',
        'America/Campo_Grande',
        'America/Cancun',
        'America/Caracas',
        'America/Cayenne',
        'America/Cayman',
        'America/Chicago',
        'America/Chihuahua',
        'America/Costa_Rica',
        'America/Creston',
        'America/Cuiaba',
        'America/Curacao',
        'America/Danmarkshavn',
        'America/Dawson',
        'America/Dawson_Creek',
        'America/Denver',
        'America/Detroit',
        'America/Dominica',
        'America/Edmonton',
        'America/Eirunepe',
        'America/El_Salvador',
        'America/Fort_Nelson',
        'America/Fortaleza',
        'America/Glace_Bay',
        'America/Godthab',
        'America/Goose_Bay',
        'America/Grand_Turk',
        'America/Grenada',
        'America/Guadeloupe',
        'America/Guatemala',
        'America/Guayaquil',
        'America/Guyana',
        'America/Halifax',
        'America/Havana',
        'America/Hermosillo',
        'America/Indiana/Indianapolis',
        'America/Indiana/Knox',
        'America/Indiana/Marengo',
        'America/Indiana/Petersburg',
        'America/Indiana/Tell_City',
        'America/Indiana/Vevay',
        'America/Indiana/Vincennes',
        'America/Indiana/Winamac',
        'America/Inuvik',
        'America/Iqaluit',
        'America/Jamaica',
        'America/Juneau',
        'America/Kentucky/Louisville',
        'America/Kentucky/Monticello',
        'America/Kralendijk',
        'America/La_Paz',
        'America/Lima',
        'America/Los_Angeles',
        'America/Lower_Princes',
        'America/Maceio',
        'America/Managua',
        'America/Manaus',
        'America/Marigot',
        'America/Martinique',
        'America/Matamoros',
        'America/Mazatlan',
        'America/Menominee',
        'America/Merida',
        'America/Metlakatla',
        'America/Mexico_City',
        'America/Miquelon',
        'America/Moncton',
        'America/Monterrey',
        'America/Montevideo',
        'America/Montserrat',
        'America/Nassau',
        'America/New_York',
        'America/Nipigon',
        'America/Nome',
        'America/Noronha',
        'America/North_Dakota/Beulah',
        'America/North_Dakota/Center',
        'America/North_Dakota/New_Salem',
        'America/Ojinaga',
        'America/Panama',
        'America/Pangnirtung',
        'America/Paramaribo',
        'America/Phoenix',
        'America/Port-au-Prince',
        'America/Port_of_Spain',
        'America/Porto_Velho',
        'America/Puerto_Rico',
        'America/Punta_Arenas',
        'America/Rainy_River',
        'America/Rankin_Inlet',
        'America/Recife',
        'America/Regina',
        'America/Resolute',
        'America/Rio_Branco',
        'America/Santarem',
        'America/Santiago',
        'America/Santo_Domingo',
        'America/Sao_Paulo',
        'America/Scoresbysund',
        'America/Sitka',
        'America/St_Barthelemy',
        'America/St_Johns',
        'America/St_Kitts',
        'America/St_Lucia',
        'America/St_Thomas',
        'America/St_Vincent',
        'America/Swift_Current',
        'America/Tegucigalpa',
        'America/Thule',
        'America/Thunder_Bay',
        'America/Tijuana',
        'America/Toronto',
        'America/Tortola',
        'America/Vancouver',
        'America/Whitehorse',
        'America/Winnipeg',
        'America/Yakutat',
        'America/Yellowknife',
        'Antarctica/Casey',
        'Antarctica/Davis',
        'Antarctica/DumontDUrville',
        'Antarctica/Macquarie',
        'Antarctica/Mawson',
        'Antarctica/McMurdo',
        'Antarctica/Palmer',
        'Antarctica/Rothera',
        'Antarctica/Syowa',
        'Antarctica/Troll',
        'Antarctica/Vostok',
        'Arctic/Longyearbyen',
        'Asia/Aden',
        'Asia/Almaty',
        'Asia/Amman',
        'Asia/Anadyr',
        'Asia/Aqtau',
        'Asia/Aqtobe',
        'Asia/Ashgabat',
        'Asia/Atyrau',
        'Asia/Baghdad',
        'Asia/Bahrain',
        'Asia/Baku',
        'Asia/Bangkok',
        'Asia/Barnaul',
        'Asia/Beirut',
        'Asia/Bishkek',
        'Asia/Brunei',
        'Asia/Chita',
        'Asia/Choibalsan',
        'Asia/Colombo',
        'Asia/Damascus',
        'Asia/Dhaka',
        'Asia/Dili',
        'Asia/Dubai',
        'Asia/Dushanbe',
        'Asia/Famagusta',
        'Asia/Gaza',
        'Asia/Hebron',
        'Asia/Ho_Chi_Minh',
        'Asia/Hong_Kong',
        'Asia/Hovd',
        'Asia/Irkutsk',
        'Asia/Jakarta',
        'Asia/Jayapura',
        'Asia/Jerusalem',
        'Asia/Kabul',
        'Asia/Kamchatka',
        'Asia/Karachi',
        'Asia/Kathmandu',
        'Asia/Khandyga',
        'Asia/Kolkata',
        'Asia/Krasnoyarsk',
        'Asia/Kuala_Lumpur',
        'Asia/Kuching',
        'Asia/Kuwait',
        'Asia/Macau',
        'Asia/Magadan',
        'Asia/Makassar',
        'Asia/Manila',
        'Asia/Muscat',
        'Asia/Nicosia',
        'Asia/Novokuznetsk',
        'Asia/Novosibirsk',
        'Asia/Omsk',
        'Asia/Oral',
        'Asia/Phnom_Penh',
        'Asia/Pontianak',
        'Asia/Pyongyang',
        'Asia/Qatar',
        'Asia/Qostanay',
        'Asia/Qyzylorda',
        'Asia/Riyadh',
        'Asia/Sakhalin',
        'Asia/Samarkand',
        'Asia/Seoul',
        'Asia/Shanghai',
        'Asia/Singapore',
        'Asia/Srednekolymsk',
        'Asia/Taipei',
        'Asia/Tashkent',
        'Asia/Tbilisi',
        'Asia/Tehran',
        'Asia/Thimphu',
        'Asia/Tokyo',
        'Asia/Tomsk',
        'Asia/Ulaanbaatar',
        'Asia/Urumqi',
        'Asia/Ust-Nera',
        'Asia/Vientiane',
        'Asia/Vladivostok',
        'Asia/Yakutsk',
        'Asia/Yangon',
        'Asia/Yekaterinburg',
        'Asia/Yerevan',
        'Atlantic/Azores',
        'Atlantic/Bermuda',
        'Atlantic/Canary',
        'Atlantic/Cape_Verde',
        'Atlantic/Faroe',
        'Atlantic/Madeira',
        'Atlantic/Reykjavik',
        'Atlantic/South_Georgia',
        'Atlantic/St_Helena',
        'Atlantic/Stanley',
        'Australia/Adelaide',
        'Australia/Brisbane',
        'Australia/Broken_Hill',
        'Australia/Currie',
        'Australia/Darwin',
        'Australia/Eucla',
        'Australia/Hobart',
        'Australia/Lindeman',
        'Australia/Lord_Howe',
        'Australia/Melbourne',
        'Australia/Perth',
        'Australia/Sydney',
        'Europe/Amsterdam',
        'Europe/Andorra',
        'Europe/Astrakhan',
        'Europe/Athens',
        'Europe/Belgrade',
        'Europe/Berlin',
        'Europe/Bratislava',
        'Europe/Brussels',
        'Europe/Bucharest',
        'Europe/Budapest',
        'Europe/Chisinau',
        'Europe/Copenhagen',
        'Europe/Dublin',
        'Europe/Gibraltar',
        'Europe/Guernsey',
        'Europe/Helsinki',
        'Europe/Isle_of_Man',
        'Europe/Istanbul',
        'Europe/Jersey',
        'Europe/Kaliningrad',
        'Europe/Kiev',
        'Europe/Kirov',
        'Europe/Lisbon',
        'Europe/Ljubljana',
        'Europe/London',
        'Europe/Luxembourg',
        'Europe/Madrid',
        'Europe/Malta',
        'Europe/Mariehamn',
        'Europe/Minsk',
        'Europe/Monaco',
        'Europe/Moscow',
        'Europe/Oslo',
        'Europe/Paris',
        'Europe/Podgorica',
        'Europe/Prague',
        'Europe/Riga',
        'Europe/Rome',
        'Europe/Samara',
        'Europe/San_Marino',
        'Europe/Sarajevo',
        'Europe/Saratov',
        'Europe/Simferopol',
        'Europe/Skopje',
        'Europe/Sofia',
        'Europe/Stockholm',
        'Europe/Tallinn',
        'Europe/Tirane',
        'Europe/Ulyanovsk',
        'Europe/Uzhgorod',
        'Europe/Vaduz',
        'Europe/Vatican',
        'Europe/Vienna',
        'Europe/Vilnius',
        'Europe/Volgograd',
        'Europe/Warsaw',
        'Europe/Zagreb',
        'Europe/Zaporozhye',
        'Europe/Zurich',
        'Indian/Antananarivo',
        'Indian/Chagos',
        'Indian/Christmas',
        'Indian/Cocos',
        'Indian/Comoro',
        'Indian/Kerguelen',
        'Indian/Mahe',
        'Indian/Maldives',
        'Indian/Mauritius',
        'Indian/Mayotte',
        'Indian/Reunion',
        'Pacific/Apia',
        'Pacific/Auckland',
        'Pacific/Bougainville',
        'Pacific/Chatham',
        'Pacific/Chuuk',
        'Pacific/Easter',
        'Pacific/Efate',
        'Pacific/Enderbury',
        'Pacific/Fakaofo',
        'Pacific/Fiji',
        'Pacific/Funafuti',
        'Pacific/Galapagos',
        'Pacific/Gambier',
        'Pacific/Guadalcanal',
        'Pacific/GuamVillage',
        'Pacific/Honolulu',
        'Pacific/Kiritimati',
        'Pacific/Kosrae',
        'Pacific/Kwajalein',
        'Pacific/Majuro',
        'Pacific/Marquesas',
        'Pacific/Midway',
        'Pacific/Nauru',
        'Pacific/Niue',
        'Pacific/Norfolk',
        'Pacific/Noumea',
        'Pacific/Pago_Pago',
        'Pacific/Palau',
        'Pacific/Pitcairn',
        'Pacific/Pohnpei',
        'Pacific/Port_Moresby',
        'Pacific/Rarotonga',
        'Pacific/Saipan',
        'Pacific/Tahiti',
        'Pacific/Tarawa',
        'Pacific/Tongatapu',
        'Pacific/Wake',
        'Pacific/Wallis'
      ]
    }
  },

  methods: {
    async UpdateAccount() {
      if (this.$refs.FirstForm.validate()) {
        try {
          await this.$apollo
            .mutate({
              mutation: UpdateProfile,
              variables: {
                name: this.User.name,
                timezone: this.User.timezone
              }
            })
            .then(({ data }) => data && data.UpdateProfile)
        } catch (error) {}
      }
    },
    async UpdateEmail() {
      if (this.$refs.EmailUpdateForm.validate()) {
        try {
          await this.$apollo
            .mutate({
              mutation: UpdateProfile,
              variables: {
                email: this.userNewEmailAddress,
                currentPassword: this.userCurrentPasswordEmail
              }
            })
            .then(({ data }) => data && data.UpdateProfile)
          this.User.email = this.userNewEmailAddress
          this.$refs.EmailUpdateForm.reset()
          this.showEmailChangeForm = await !this.showEmailChangeForm
        } catch (error) {}
      }
    },
    async UpdatePassword() {
      if (this.$refs.PasswordUpdateForm.validate()) {
        try {
          await this.$apollo
            .mutate({
              mutation: UpdateProfile,
              variables: {
                currentPassword: this.userCurrentPassword,
                newPassword: this.userNewPassword
              }
            })
            .then(({ data }) => data && data.UpdateProfile)
          this.$refs.PasswordUpdateForm.reset()
          this.showPasswordChangeForm = await !this.showPasswordChangeForm
        } catch (error) {}
      }
    }
  }
}
</script>
