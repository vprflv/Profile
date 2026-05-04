'use client'
export default function Privacy() {
    return (
        <div className="min-h-screen bg-slate-50 py-16">
            <div className="max-w-3xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Политика конфиденциальности</h1>

                <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 mb-8">
                        Последнее обновление: 04 мая 2026
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">1. Общие положения</h2>
                    <p>
                        Настоящая Политика конфиденциальности описывает, как Перфильев Виктор Сергеевич (далее — «Я»,
                        «Разработчик»)
                        собирает, использует и защищает ваши персональные данные при использовании этого сайта.
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">2. Какие данные я собираю</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Имя и контактные данные (email, Telegram), которые вы вводите в форме связи</li>
                        <li>Технические данные: IP-адрес, тип браузера, время посещения (анонимно)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">3. Для чего я использую данные</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Для связи с вами по поводу проектов</li>
                        <li>Для улучшения работы сайта</li>
                        <li>Для ответа на ваши сообщения</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">4. Кому я могу передать данные</h2>
                    <p>
                        Я не продаю и не передаю ваши данные третьим лицам, за исключением случаев:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>При необходимости выполнения договора (например, интеграция с CRM)</li>
                        <li>По требованию закона</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">5. Ваши права</h2>
                    <p>Вы имеете право в любой момент:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Запросить удаление ваших данных</li>
                        <li>Отозвать согласие на обработку данных</li>
                        <li>Получить копию своих данных</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">6. Контакты</h2>
                    <p>
                        По всем вопросам, связанным с обработкой персональных данных, вы можете написать мне:
                    </p>
                    <p className="mt-3">
                        Telegram: <a href="https://t.me/@vp_dev_fs"
                                     className="text-emerald-600 hover:underline">@vp_dev_fs</a><br/>
                        Email: viktorprf234@gmail.com
                    </p>

                    <p className="mt-12 text-sm text-slate-500">
                        Если у вас остались вопросы — пишите, я всегда на связи.
                    </p>


                    <p className="mt-12 text-xs text-slate-500">
                        Обработка персональных данных осуществляется в соответствии с Федеральным законом
                        № 152-ФЗ «О персональных данных».
                    </p>
                </div>
            </div>
        </div>
    );
}