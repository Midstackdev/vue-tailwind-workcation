<template>
    <div class="container mx-auto sm:px-4 pt-6">
        <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4 flex flex-col">
                <div class="flex-grow flex flex-col bg-white rounded border">
                    <div class="border-b">
                        <div class="flex justify-between px-6 -mb-px">
                            <h3 class="text-blue-500 py-4 font-normal text-lg">Your Portfolio</h3>
                            <div class="flex justify-between">
                                <div class="py-4 text-blue-600 border-b border-blue-600 mr-3">
                                  List
                                </div>
                                <div class="py-4 text-gray-600 border-b border-transparent hover:border-gray-600 mr-3">
                                  Chart
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="border-b"> -->
                        <div class="flex flex-grow px-6 py-6 items-center text-gray-600 border-b">
                            <div class="w-1/4 flex items-center">
                                <div class="mr-3">
                                    <svg class="fill-current text-orange-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></svg>
                                </div>
                                <span class="text-lg">Bitcoin</span>
                            </div>
                            <div class="w-1/4 flex items-center">
                                <div class="bg-orange-400 h-2 rounded-full flex-grow mr-2"></div>
                                100%
                            </div>
                            <div class="w-1/4">
                                <div class="text-right">
                                    0.012 BTC
                                </div>
                            </div>
                            <div class="w-1/4">
                                <div class="text-gray-400 text-right">
                                    US$23.87
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-grow px-6 py-6 items-center text-gray-600 border-b">
                            <div class="w-1/4 flex items-center">
                                <div class="mr-3">
                                    <svg class="fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm5.236-21.309c-.777-1.972-2.722-2.15-4.988-1.71l-.807-2.813-1.712.491.785 2.74c-.45.128-.907.269-1.362.41l-.79-2.758-1.712.49.806 2.813c-.369.114-.73.225-1.086.327l-.002-.008-2.362.676.525 1.829s1.257-.387 1.243-.357c.693-.2 1.035.139 1.2.467l.92 3.205c.047-.013.11-.03.184-.04l-.181.052 1.287 4.49c.032.227.003.612-.481.752.027.013-1.245.356-1.245.356l.246 2.143 2.229-.64c.414-.118.824-.228 1.226-.34l.816 2.845 1.71-.49-.806-2.815a65.74 65.74 0 001.371-.38l.803 2.803 1.712-.491-.813-2.84c2.831-.991 4.638-2.294 4.113-5.07-.422-2.234-1.725-2.912-3.472-2.836.848-.79 1.214-1.859.643-3.301zm-.651 6.77c.61 2.127-3.1 2.929-4.26 3.263l-1.08-3.77c1.16-.333 4.704-1.71 5.34.508zm-2.322-5.09c.554 1.935-2.547 2.58-3.513 2.857l-.98-3.419c.966-.277 3.914-1.455 4.493.562z" fill-rule="evenodd"/>
                                    </svg>
                                </div>
                                <span class="text-lg">Etherium</span>
                            </div>
                            <div class="w-1/4 flex items-center">
                                <div class="bg-green-400 h-2 rounded-full flex-grow mr-2"></div>
                                100%
                            </div>
                            <div class="w-1/4">
                                <div class="text-right">
                                    0.012 BTC
                                </div>
                            </div>
                            <div class="w-1/4">
                                <div class="text-gray-400 text-right">
                                    US$23.87
                                </div>
                            </div>
                        </div>                        
                        <div class="flex flex-grow px-6 py-6 items-center text-gray-600 border-b">
                            <div class="w-1/4 flex items-center">
                                <div class="mr-3">
                                    <svg class="fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                        <path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.573-12.786L9.252 24h12.875L23 20.429h-7.722l.848-3.483 1.427-.571.68-2.75-1.41.571L18.342 8h-5.129l-2.081 8.429-1.444.58L9 19.768l1.427-.554z"/>
                                    </svg>
                                </div>
                                <span class="text-lg">Litecoin</span>
                            </div>
                            <div class="w-1/4 flex items-center">
                                <div class="bg-gray-400 h-2 rounded-full w-2 mr-2"></div>
                                0%
                            </div>
                            <div class="w-1/4">
                                <div class="text-right">
                                    0.000 LTC
                                </div>
                            </div>
                            <div class="w-1/4">
                                <div class="text-gray-400 text-right">
                                    US0.00
                                </div>
                            </div>
                        </div>
                    <!-- </div> -->
                    <div class="px-6 py-4">
                        <div class="text-center text-gray-600">
                            Total Balance &asymp; US$21.23
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-4">
                <div class="bg-white rounded border">
                    <div class="border-b">
                        <div class="flex justify-between px-6 -mb-px">
                            <h3 class="text-blue-500 py-4 font-normal text-lg">Recent Actitvity</h3>
                        </div>
                    </div>
                    <div class="">
                        <div class="text-center px-6 py-4">
                            <div class="py-8">                            
                                <div class="mb-4">                            
                                    <svg class="inline-block fill-current text-gray-500 h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M20.322.75a10.75 10.75 0 00-7.373 2.926l-1.304 1.23A23.743 23.743 0 0010.103 6.5H5.066a1.75 1.75 0 00-1.5.85l-2.71 4.514a.75.75 0 00.49 1.12l4.571.963c.039.049.082.096.129.14L8.04 15.96l1.872 1.994c.044.047.091.09.14.129l.963 4.572a.75.75 0 001.12.488l4.514-2.709a1.75 1.75 0 00.85-1.5v-5.038a23.741 23.741 0 001.596-1.542l1.228-1.304a10.75 10.75 0 002.925-7.374V2.499A1.75 1.75 0 0021.498.75h-1.177zM16 15.112c-.333.248-.672.487-1.018.718l-3.393 2.262.678 3.223 3.612-2.167a.25.25 0 00.121-.214v-3.822zm-10.092-2.7L8.17 9.017c.23-.346.47-.685.717-1.017H5.066a.25.25 0 00-.214.121l-2.167 3.612 3.223.679zm8.07-7.644a9.25 9.25 0 016.344-2.518h1.177a.25.25 0 01.25.25v1.176a9.25 9.25 0 01-2.517 6.346l-1.228 1.303a22.248 22.248 0 01-3.854 3.257l-3.288 2.192-1.743-1.858a.764.764 0 00-.034-.034l-1.859-1.744 2.193-3.29a22.248 22.248 0 013.255-3.851l1.304-1.23zM17.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-11 13c.9-.9.9-2.6 0-3.5-.9-.9-2.6-.9-3.5 0-1.209 1.209-1.445 3.901-1.49 4.743a.232.232 0 00.247.247c.842-.045 3.534-.281 4.743-1.49z"></path>
                                    </svg>
                                </div>
                                <p class="text-2xl text-gray-700 font-medium mb-4">No buys or sells yet.</p>
                                <p class="text-gray-500 max-w-xs mx-auto mb-6">You've successfully linked a payment method and you can start buying digital currency.</p>
                                <div>
                                    <button type="button" class="bg-blue-500 text-white rounded px-6 py-4 border border-blue-700">Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {

    }
</script>