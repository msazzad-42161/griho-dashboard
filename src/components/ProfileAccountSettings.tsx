import React from 'react';
import { TextInput } from '@/stories/common/Input/TextInput';
import { Button } from '@/stories/common/Input/Button';
import { useTranslation } from 'react-i18next';

const ProfileAccountSettings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col lg:flex-row gap-4 p-4 bg-white rounded-lg'>
      <form className='flex flex-1 flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-xl lg:text-2xl font-bold text-secondary'>
            {t('profile.accountSettings.title')}
          </h1>
          <p className='text-xs lg:text-sm text-secondary'>
            {t('profile.accountSettings.description')}
          </p>
        </div>

        <TextInput
          type="email"
          placeholder={`${t('profile.accountSettings.email')}...`}
          defaultValue="arafat@griho.net"
          className='p-4'
        />
        
        <div className='grid grid-cols-2 gap-4'>
          <TextInput
            type="text"
            placeholder={`${t('profile.accountSettings.firstName')}...`}
            defaultValue="Arafat"
            className='p-4'
          />
          <TextInput
            type="text"
            placeholder={`${t('profile.accountSettings.lastName')}...`}
            defaultValue="Arafat"
            className='p-4'
          />
        </div>

        <TextInput
          type="text"
          placeholder={`${t('profile.accountSettings.phone')}...`}
          defaultValue="01609525008"
          className='p-4'
        />

        <TextInput
          type="text"
          placeholder={`${t('profile.accountSettings.address')}...`}
          defaultValue="H-43/44, R-23, Block D, Section-6"
          className='p-4'
        />
  <Button 
    primary
          label={t('profile.accountSettings.saveChanges')}
          icon="material-symbols:save-outline"
          size="large"
          onClick={() => console.log('Saving changes...')}
          className="lg:text-base text-sm"
        />
      </form>
      
      <div className='flex flex-col gap-4 p-6 bg-input-background rounded-lg min-w-[300px]'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl font-semibold text-[#1E293B]'>
            {t('profile.accountSettings.photo.title')}
          </h2>
          <p className='text-sm text-[#64748B]'>
            {t('profile.accountSettings.photo.description')}
          </p>
        </div>

        <img 
          src="https://i.pravatar.cc/300" 
          alt="Profile" 
          className='w-full aspect-square rounded-full border-4 border-white object-cover'
        />
<Button 
          label={t('profile.accountSettings.photo.editButton')}
          icon="material-symbols:edit-outline"
          size="large"
          primary
          onClick={() => console.log('Edit photo...')}
          className="lg:text-base text-sm"
        />
      </div>
    </div>
  );
};

export default ProfileAccountSettings;
