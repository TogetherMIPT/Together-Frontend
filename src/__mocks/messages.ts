import type { IMessage } from "../types/message";

export const mockMessages: IMessage[] = [
  {
    "message_id": "msg_001",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:00:00Z",
    "message_text": "Привет! Я хочу создать чат-бота для своего бизнеса. С чего начать?",
    "sender": "user"
  },
  {
    "message_id": "msg_002",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:00:05Z",
    "message_text": "Привет! Отличная идея! Сначала определите цель бота: поддержка клиентов, продажи, информирование?",
    "sender": "assistant"
  },
  {
    "message_id": "msg_003",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:02:10Z",
    "message_text": "В основном — ответы на частые вопросы и помощь с оформлением заказа.",
    "sender": "user"
  },
  {
    "message_id": "msg_004",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:02:20Z",
    "message_text": "Понял! Тогда вам подойдёт FAQ-бот с интеграцией в корзину. Нужна помощь с выбором платформы?",
    "sender": "assistant"
  },
  {
    "message_id": "msg_005",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:05:00Z",
    "message_text": "Да, пожалуйста. Что посоветуете: Dialogflow, Rasa или что-то ещё?",
    "sender": "user"
  },
  {
    "message_id": "msg_006",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:05:15Z",
    "message_text": "Если вы новичок — начните с Dialogflow (от Google). Он прост в настройке и отлично интегрируется с Telegram, WhatsApp и сайтом.",
    "sender": "assistant"
  },
  {
    "message_id": "msg_007",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:08:30Z",
    "message_text": "А как насчёт обработки заказов? Сможет ли он передавать данные в мою CRM?",
    "sender": "user"
  },
  {
    "message_id": "msg_008",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:09:00Z",
    "message_text": "Да, через вебхуки (webhooks). Вы можете настроить отправку данных из Dialogflow в вашу CRM при определённых действиях пользователя.",
    "sender": "assistant"
  },
  {
    "message_id": "msg_009",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:12:45Z",
    "message_text": "Отлично! А есть примеры таких интеграций?",
    "sender": "user"
  },
  {
    "message_id": "msg_010",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:13:20Z",
    "message_text": "Конечно! Например, интеграция с Bitrix24, HubSpot или даже кастомным API. Могу прислать ссылку на документацию.",
    "sender": "assistant"
  },
  {
    "message_id": "msg_011",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:15:00Z",
    "message_text": "Да, пришлите, пожалуйста.",
    "sender": "user"
  },
  {
    "message_id": "msg_012",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:15:10Z",
    "message_text": "Вот официальная документация Dialogflow по вебхукам: https://cloud.google.com/dialogflow/docs/fulfillment-overview",
    "sender": "assistant"
  },
  {
    "message_id": "msg_013",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:18:00Z",
    "message_text": "Спасибо! А сколько времени займёт настройка простого бота?",
    "sender": "user"
  },
  {
    "message_id": "msg_014",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:18:30Z",
    "message_text": "Базовый FAQ-бот можно собрать за 1–2 дня. С интеграцией — до недели, в зависимости от сложности.",
    "sender": "assistant"
  },
  {
    "message_id": "msg_015",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:20:10Z",
    "message_text": "Понял. А вы можете помочь с разработкой?",
    "sender": "user"
  },
  {
    "message_id": "msg_016",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:20:25Z",
    "message_text": "Я — AI-ассистент, но могу дать пошаговое руководство, шаблоны и код! Например, вот структура intents для вашего случая…",
    "sender": "assistant"
  },
  {
    "message_id": "msg_017",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:22:00Z",
    "message_text": "Было бы здорово!",
    "sender": "user"
  },
  {
    "message_id": "msg_018",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:22:30Z",
    "message_text": "Отлично! Начнём с трёх основных сценариев: 1) «Узнать статус заказа», 2) «Оформить заказ», 3) «Частые вопросы».",
    "sender": "assistant"
  },
  {
    "message_id": "msg_019",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:25:00Z",
    "message_text": "А как обрабатывать номер заказа? Через текст или кнопки?",
    "sender": "user"
  },
  {
    "message_id": "msg_020",
    "chat_id": "chat_001",
    "creation_datetime": "2025-11-20T09:25:40Z",
    "message_text": "Лучше через текст с валидацией — пользователь вводит номер, бот проверяет формат и запрашивает API вашей системы.",
    "sender": "assistant"
  }
]
