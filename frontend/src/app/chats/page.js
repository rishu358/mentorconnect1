// frontend/src/app/chats/page.js
"use client"; // This marks the component as a Client Component

import React, { useState } from 'react';

export default function ChatsPage() {
  // Mock chat data for demonstration
  const [chats, setChats] = useState([
    { id: 1, name: 'Kate Kumar', lastMessage: 'You: I will send you...', avatar: 'https://placehold.co/40x40/E0F2F7/000000?text=KK' },
    { id: 2, name: 'Kate Kumar', lastMessage: 'You: I will send you...', avatar: 'https://placehold.co/40x40/E0F2F7/000000?text=KK' },
    { id: 3, name: 'Kate Kumar', lastMessage: 'You: I will send you...', avatar: 'https://placehold.co/40x40/E0F2F7/000000?text=KK' },
    { id: 4, name: 'Kate Kumar', lastMessage: 'You: I will send you...', avatar: 'https://placehold.co/40x40/E0F2F7/000000?text=KK' },
    { id: 5, name: 'Kate Kumar', lastMessage: 'You: I will send you...', avatar: 'https://placehold.co/40x40/E0F2F7/000000?text=KK' },
    { id: 6, name: 'Kate Kumar', lastMessage: 'You: I will send you...', avatar: 'https://placehold.co/40x40/E0F2F7/000000?text=KK' },
    { id: 7, name: 'Kate Kumar', lastMessage: 'You: I will send you...', avatar: 'https://placehold.co/40x40/E0F2F7/000000?text=KK' },
    { id: 8, name: 'Kate Kumar', lastMessage: 'You: I will send you...', avatar: 'https://placehold.co/40x40/E0F2F7/000000?text=KK' },
    { id: 9, name: 'Kate Kumar', lastMessage: 'You: I will send you...', avatar: 'https://placehold.co/40x40/E0F2F7/000000?text=KK' },
  ]);

  const [activeChat, setActiveChat] = useState({
    id: 1,
    name: 'Kate Kumar',
    username: '@Kate_Kumar',
    avatar: 'https://placehold.co/80x80/E0F2F7/000000?text=KK',
    mutualCommunity: '4 Mutual Community',
    history: [
      { sender: 'Kate_kumar', date: '09/07/2024, 12.31', message: 'Hi, You Are Welcome ! Have A Great Time Here In Squadgrowth' }
    ]
  });

  return (
    <div className="flex w-full h-[calc(100vh-10rem)] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      {/* Left Panel: Chat List */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Search Bar for Chats */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 pl-8 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
            <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </div>

        {/* Chat Contacts List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map(chat => (
            <div
              key={chat.id}
              className={`flex items-center p-3 border-b border-gray-100 cursor-pointer hover:bg-blue-50 ${activeChat.id === chat.id ? 'bg-blue-50' : ''}`}
              onClick={() => setActiveChat(chat)} // Simple state update for active chat
            >
              <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full mr-3" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{chat.name}</h3>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel: Active Chat View */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="bg-green-50 p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full mr-3" />
            <h2 className="font-semibold text-gray-900">{activeChat.name}</h2>
          </div>
          <div className="flex items-center space-x-4 text-gray-600">
            <button className="p-1 rounded-full hover:bg-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </button>
            <button className="p-1 rounded-full hover:bg-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {/* Active Chat Profile Info */}
          <div className="flex flex-col items-center justify-center text-center py-6 mb-6 border-b border-gray-200">
            <img src={activeChat.avatar} alt={activeChat.name} className="w-20 h-20 rounded-full mb-3" />
            <h3 className="text-xl font-bold text-gray-900">{activeChat.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{activeChat.username}</p>
            <p className="text-gray-600 max-w-sm">This Is The Beginning Of Your Direct Message History With Mihir Panpatil</p>
            <span className="text-blue-600 text-sm mt-2">{activeChat.mutualCommunity}</span>
          </div>

          {/* Date Separator */}
          <div className="text-center text-xs text-gray-400 my-4">
            9 July 2024
          </div>

          {/* Message Bubble (Example) */}
          {activeChat.history.map((msg, index) => (
            <div key={index} className="flex items-start mb-4">
              <img src="https://placehold.co/40x40/E0F2F7/000000?text=KK" alt={msg.sender} className="w-10 h-10 rounded-full mr-3" />
              <div className="bg-blue-100 p-3 rounded-xl max-w-md">
                <p className="font-semibold text-gray-800">{msg.sender} <span className="text-xs text-gray-500 ml-2">{msg.date}</span></p>
                <p className="text-gray-700">{msg.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input Area */}
        <div className="p-4 border-t border-gray-200 bg-white flex items-center space-x-3">
          <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          </button>
          <input
            type="text"
            placeholder={`Message @${activeChat.name}`}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="text-gray-500 hover:text-gray-700 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13.5"></path></svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </button>
          <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
