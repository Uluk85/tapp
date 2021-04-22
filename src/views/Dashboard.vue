<template>
  <div>
   <div class="mt-8">
    <h4 class="text-gray-600">Offers</h4>

    <div class="flex flex-col mt-6">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table class="min-w-full">
            <thead>
            <tr>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Имя
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Название
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Статус
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Описание
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-100">
              </th>
            </tr>
            </thead>

            <tbody class="bg-white">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="/user_avatar.png" alt/>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      Ulukbek
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      Заказчик
                    </div>
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">
                 Заказ
                </div>
                <div class="text-sm leading-5 text-gray-500">
                 Сварщик
                </div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Активный
                    </span>
              </td>

              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 text-gray-500">
               Разряд - 5
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <button class="text-indigo-600 hover:text-indigo-900" @click="open = true">
                  Редактировать
                </button>

                <div :class="`modal ${
                     !open && 'opacity-0 pointer-events-none'}
                     z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
                  <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50">
                  </div>

                  <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
                      <svg
                          class="fill-current text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                      >
                        <path
                            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        />
                      </svg>
                      <span class="text-sm">(Esc)</span>
                    </div>

                    <!-- Add margin if you want to see some of the overlay behind the modal-->
                    <div class="modal-content py-4 text-left px-6">
                      <!--Title-->
                      <div class="flex justify-between items-center pb-3">
                        <p class="text-2xl font-bold">Modal Title</p>
                        <div class="modal-close cursor-pointer z-50" @click="open = false">
                          <svg
                              class="fill-current text-black"
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                          >
                            <path
                                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                            />
                          </svg>
                        </div>
                      </div>

                      <!--Body-->
                      <table class="min-w-full">
                        <thead>
                        <tr>
                          <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Имя
                          </th>
                          <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Название
                          </th>
                          <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Статус
                          </th>
                          <th class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Описание
                          </th>
                          <th class="px-6 py-3 border-b border-gray-200 bg-gray-100">
                          </th>
                        </tr>
                        </thead>

                        <tbody class="bg-white">
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 h-10 w-10">
                                <img class="h-10 w-10 rounded-full"
                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt
                                />
                              </div>
                              <div class="ml-4">
                                <div class="text-sm leading-5 font-medium text-gray-900">
                                  Ulukbek
                                </div>
                                <div class="text-sm leading-5 text-gray-500">
                                  Заказчик
                                </div>
                              </div>
                            </div>
                          </td>

                          <td
                              class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                            <div class="text-sm leading-5 text-gray-900">
                              Заказ
                            </div>
                            <div class="text-sm leading-5 text-gray-500">
                              Сварщик
                            </div>
                          </td>

                          <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Активный
                    </span>
                          </td>

                          <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                            Разряд - 5
                          </td>

                          <td class="px-6 py-4 whitespace-nowrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                            <button class="text-indigo-600 hover:text-indigo-900" @click="open = true">
                              Редактировать
                            </button>

                            <div :class="`modal ${
                     !open && 'opacity-0 pointer-events-none'}
                     z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
                              <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50">
                              </div>

                              <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                                <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
                                  <svg
                                      class="fill-current text-white"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                  >
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                                    />
                                  </svg>
                                  <span class="text-sm">(Esc)</span>
                                </div>

                                <!-- Add margin if you want to see some of the overlay behind the modal-->
                                <div class="modal-content py-4 text-left px-6">
                                  <!--Title-->
                                  <div class="flex justify-between items-center pb-3">
                                    <p class="text-2xl font-bold">Modal Title</p>
                                    <div class="modal-close cursor-pointer z-50" @click="open = false">
                                      <svg
                                          class="fill-current text-black"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          viewBox="0 0 18 18"
                                      >
                                        <path
                                            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                                        />
                                      </svg>
                                    </div>
                                  </div>

                                  <!--Body-->
                                  <p>Modal content.</p>

                                  <!--Footer-->
                                  <div class="flex justify-end pt-2">
                                    <button @click="open = false"
                                            class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
                                      Close
                                    </button>
                                    <button @click="open = false"
                                            class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500">
                                      Action
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>

                      <!--Footer-->
                      <div class="flex justify-end pt-2">
                        <button @click="open = false"
                                class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
                          Close
                        </button>
                        <button @click="open = false"
                                class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500">
                          Action
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

</script>


<style>

</style>