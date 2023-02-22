<template>
    <ClientOnly>
        <div dir="rtl" class="border border-[#eee] shadow-lg rounded-md p-6 mb-4 pb-8">
            <div class="flex justify-between p-2 pl-4 pr-4 bg-black text-white rounded-xl mb-4">
                <p>تاريخ البث</p>
                <p>22-1-22</p>
            </div>
            <div class="flex justify-between text-center gap-2 text-white">
                <div class="relative w-1/2 p-1 pt-6 pb-6 bg-purble rounded-lg ">
                    <div class="mb-2">القيمة الحالية</div>
                    <div class="text-2xl font-bold">5000$</div>
                    <div class="absolute bg-white shadow-md text-purble p-1 rounded-xl w-32 move-this">اسم المزايد
                    </div>
                </div>
                <div class="w-1/2 p-1 pt-6 pb-6 bg-purble-light text-purble rounded-lg">
                    <div class="mb-2">بعد الضريبة</div>
                    <div class="text-2xl font-bold">5050$</div>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>

<style>
.move-this {
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
}
</style>