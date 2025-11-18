"use client"; 
import React, { useState } from 'react';

interface FormData {
  name: string;
  address: string;
  phone: string;
  occupation: string;
  select1: string;
  select2: string;
}

const FormTemplate: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    phone: '',
    occupation: '',
    select1: '',
    select2: '',
  });
  const [activeTab, setActiveTab] = useState<'select1' | 'select2'>('select1');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTabClick = (tab: 'select1' | 'select2') => {
    setActiveTab(tab);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // ここに送信処理を追加
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="address" className="block font-medium mb-1">
            住所
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium mb-1">
            電話番号
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="occupation" className="block font-medium mb-1">
            職業
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex border-b mb-2">
          <button
            type="button"
            onClick={() => handleTabClick('select1')}
            className={`px-4 py-2 ${
              activeTab === 'select1' ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            希望職種
          </button>
          <button
            type="button"
            onClick={() => handleTabClick('select2')}
            className={`px-4 py-2 ${
              activeTab === 'select2' ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            希望年収
          </button>
        </div>
        <div>
          {activeTab === 'select1' && (
            <select
              name="select1"
              value={formData.select1}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">---</option>
              <option value="option1-1">QAエンジニア</option>
              <option value="option1-2">プロジェクトマネージャ</option>
              <option value="option1-3">フロントエンジニア</option>
              <option value="option1-4">バックエンドエンジニア</option>
            </select>
          )}
          {activeTab === 'select2' && (
            <select
              name="select2"
              value={formData.select2}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">---</option>
              <option value="option2-1">200～300万</option>
              <option value="option2-2">300～400万</option>
              <option value="option2-3">400～500万</option>
            </select>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        送信
      </button>
    </form>
  );
};

export default FormTemplate;
