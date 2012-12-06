VKCrypt
========

**VKCrypt** шифрует сообщения передаваемые Вконтакте, используя Букмаклеты, то есть, закладки с javascript'ом, вместо адреса сайта.

Букмаклеты
========
Для использования **VKCrypt** неоходимо создать 3 букмаклета:
- Зашифровать [min/bookmarklets/encrypt.min.js](//github.com/coderaiser/vk-crypt/raw/master/min/bookmarlkets/encrypt.min.js)
- Росшировать [min/bookmarklets/decrypt.min.js](//github.com/coderaiser/vk-crypt/raw/master/min/bookmarlkets/decrypt.min.js)
- Установить ключ [min/bookmarklets/setKey.min.js](//github.com/coderaiser/vk-crypt/raw/master/min/bookmarlkets/setKey.min.js)

То есть создать три вкладки, в каждую из которых вставить содержимое указанных файлов в поле URL.

Предназначение
========
Каждый из букмаклетов используеться для опредиленной цели. Перед шифрованием необходимо **установить ключ**, и передать
его собеседнику через любой канал связи, кроме вконтакта (иначе всё это не будет иметь смысла).
После чего написать текст и нажать на букмаклет **Зашифровать**.

Собеседнику необходимо будет установить тот же ключ, выбрать сообщения и
нажать на кнопку **Расшифровать**, после полученя сообщения,
тогда он сможет его прочитать.

Поскольку ключ знаете только вы, никто больше не сможет прочитать сообщение.

На серверах Вконтакта будет храниться только зашифрованная переписка.

Известные проблемы
========
Если расшифровать не зашифрованный текст, получиться абрка-кадабра, восстановить,
которую можно только перезагрузкой текста. Поэтому пока не стоит так делать.

При расшифровании и шифровании пришедших сообщений ник "сьедаеться".

Внутреннее устройство
========
Пароль храниться в **localStorage** и будет доступен после закрытия браузера
(если не включен режим **Инкогнито**). Для шифрования используеться алгоритм **AES**.

Необходимые библиотеки загружаються при не обходимости при первом обращении.