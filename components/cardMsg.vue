<template>
    <ClientOnly>
        <div dir="rtl" class="border border-[#eee] shadow-lg rounded-md p-6 mt-4">
            <div class="text-purble font-bold text-lg mb-2">إرسل رسالة للبائع</div>
            <div class="text-black mb-4">يمكنك في وقت البث المباشر إرسال رسالة إلى البائع للاستفسار</div>
            <div class="flex gap-3">
                <input class="w-full rounded-3xl border p-2 pr-4 bg-[#eee] border-gray outline-none" type="text"
                    placeholder="إكتب سؤالك">
                <button class="bg-gradient-to-r from-pink-main to-pink-dark text-white p-2 w-10 h-10 rounded-full">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
            </div>
        </div>
    </ClientOnly>
</template>