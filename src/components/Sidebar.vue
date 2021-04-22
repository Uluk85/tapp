<template>
  <div class="flex">
    <div
        :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
        class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-200 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <svg width="100" height="40" viewBox="0 0 166 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6009 42.0442C12.9202 42.0442 11.5547 41.5265 10.6093 40.4909C9.66392 39.4553 9.13871 38.0055 9.13871 36.0379V16.7763H19.643V9.2166H9.13871V0H0V36.245C0 40.698 1.15546 44.1154 3.57144 46.3937C5.88238 48.6719 9.24375 49.9146 13.5505 49.9146C15.2312 49.9146 16.9119 49.7075 18.3825 49.1897C19.9581 48.7755 21.2186 48.0506 22.269 47.1185L19.748 40.3873C18.2774 41.4229 16.5967 42.0442 14.6009 42.0442Z" fill="#00E3D9"/>
            <path d="M55.8834 13.7717C54.3078 12.0112 52.5221 10.665 50.3162 9.73297C48.2153 8.80095 45.9044 8.38672 43.2783 8.38672C39.4968 8.38672 36.0304 9.21518 33.0892 10.9756C30.0429 12.7361 27.732 15.1179 26.0513 18.2247C24.3706 21.3314 23.5303 24.9559 23.5303 29.0982C23.5303 33.2405 24.3706 36.865 26.0513 39.9717C27.732 43.0784 30.0429 45.5638 33.0892 47.2207C36.1354 48.9812 39.4968 49.8096 43.2783 49.8096C46.0094 49.8096 48.4254 49.2918 50.6313 48.3598C52.8372 47.4278 54.728 45.978 56.1986 44.0104V49.1883H64.9171V8.80094H55.7784V13.7717H55.8834ZM52.7321 38.2112C50.5262 40.4894 47.7951 41.7322 44.3287 41.7322C40.8623 41.7322 38.1312 40.593 36.0303 38.2112C33.8244 35.9329 32.774 32.8262 32.774 29.0982C32.774 25.3701 33.8244 22.2634 36.0303 19.9851C38.2362 17.7069 40.9674 16.4642 44.3287 16.4642C47.6901 16.4642 50.5262 17.6033 52.7321 19.9851C54.938 22.2634 55.9885 25.3701 55.9885 29.0982C55.9885 32.8262 54.938 35.9329 52.7321 38.2112Z" fill="#00E3D9"/>
            <path d="M106.723 10.9756C103.677 9.21518 100.316 8.38672 96.5343 8.38672C93.8032 8.38672 91.3872 8.9045 89.1813 9.83651C86.9754 10.7685 85.0847 12.2183 83.6141 14.1859V8.9045H74.8955V63.997H84.0342V44.4246C87.0805 48.0491 91.2822 49.9132 96.5343 49.9132C100.316 49.9132 103.782 49.0847 106.723 47.3242C109.77 45.5638 112.081 43.1819 113.761 39.9717C115.442 36.865 116.282 33.2405 116.282 29.0982C116.282 25.0594 115.442 21.4349 113.761 18.2247C112.186 15.1179 109.77 12.6326 106.723 10.9756ZM103.782 38.2112C101.576 40.4894 98.8452 41.7322 95.4839 41.7322C93.278 41.7322 91.2822 41.2144 89.4964 40.1788C87.7107 39.1432 86.3452 37.6934 85.2947 35.7258C84.2443 33.7582 83.7191 31.5835 83.7191 29.0982C83.7191 26.6128 84.2443 24.3345 85.2947 22.4705C86.3452 20.5029 87.7107 19.0531 89.4964 18.0175C91.2822 16.982 93.278 16.4642 95.4839 16.4642C98.8452 16.4642 101.681 17.6033 103.782 19.9851C105.988 22.2634 107.039 25.3701 107.039 29.0982C107.039 32.8262 105.988 35.9329 103.782 38.2112Z" fill="#00E3D9"/>
            <path d="M162.503 18.2247C160.822 15.1179 158.406 12.6326 155.465 10.9756C152.418 9.21518 149.057 8.38672 145.276 8.38672C142.544 8.38672 140.128 8.9045 137.923 9.83651C135.717 10.7685 133.826 12.2183 132.355 14.1859V8.9045H123.637V63.997H132.775V44.4246C135.822 48.0491 140.023 49.9132 145.276 49.9132C149.057 49.9132 152.523 49.0847 155.465 47.3242C158.511 45.5638 160.822 43.1819 162.503 39.9717C164.183 36.865 165.024 33.2405 165.024 29.0982C165.129 24.9559 164.183 21.3314 162.503 18.2247ZM152.523 38.2112C150.318 40.4894 147.586 41.7322 144.225 41.7322C142.019 41.7322 140.023 41.2144 138.238 40.1788C136.452 39.1432 135.086 37.6934 134.036 35.7258C132.986 33.7582 132.46 31.5835 132.46 29.0982C132.46 26.6128 132.986 24.3345 134.036 22.4705C135.086 20.5029 136.452 19.0531 138.238 18.0175C140.023 16.982 142.019 16.4642 144.225 16.4642C147.586 16.4642 150.423 17.6033 152.523 19.9851C154.729 22.2634 155.78 25.3701 155.78 29.0982C155.78 32.8262 154.729 35.9329 152.523 38.2112Z" fill="#00E3D9"/>
          </svg>
        </div>
      </div>

      <nav class="mt-10">
        <router-link
            class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4"
            :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
            to="/dashboard"
        >
          <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                fill="currentColor"
            />
            <path
                d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z"
                fill="currentColor"
            />
          </svg>

          <span class="mx-4">Dashboard</span>
        </router-link>

        <router-link
            class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4"
            :class="[$route.name === 'UIElements' ? activeClass : inactiveClass]"
            to="/ui-elements"
        >
          <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
                fill="currentColor"
            />
            <path
                d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
                fill="currentColor"
            />
            <path
                d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
                fill="currentColor"
            />
            <path
                d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
                fill="currentColor"
            />
          </svg>

          <span class="mx-4">UI Elements</span>
        </router-link>

        <router-link
            class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4"
            :class="[$route.name === 'Tables' ? activeClass : inactiveClass]"
            to="/tables"
        >
          <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z"
                fill="currentColor"
            />
            <path
                d="M4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7Z"
                fill="currentColor"
            />
            <path
                d="M2 11C2 9.89543 2.89543 9 4 9H16C17.1046 9 18 9.89543 18 11V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V11Z"
                fill="currentColor"
            />
          </svg>

          <span class="mx-4">Tables</span>
        </router-link>

        <router-link
            class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4"
            :class="[$route.name === 'Forms' ? activeClass : inactiveClass]"
            to="/forms"
        >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
                fill-rule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clip-rule="evenodd"
            />
          </svg>

          <span class="mx-4">Forms</span>
        </router-link>

        <router-link
            class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4"
            :class="[$route.name === 'Cards' ? activeClass : inactiveClass]"
            to="/cards"
        >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
                fill-rule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clip-rule="evenodd"
            />
          </svg>

          <span class="mx-4">Cards</span>
        </router-link>

        <router-link
            class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4"
            :class="[$route.name === 'Modal' ? activeClass : inactiveClass]"
            to="/modal"
        >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            />
          </svg>

          <span class="mx-4">Modal</span>
        </router-link>

        <router-link
            class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4"
            :class="[$route.name === 'Blank' ? activeClass : inactiveClass]"
            to="/blank"
        >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            />
          </svg>

          <span class="mx-4">Blank</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>


<script>

</script>

<style>

</style>