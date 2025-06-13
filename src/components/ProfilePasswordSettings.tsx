import React from 'react';
import { TextInput } from '@/stories/common/Input/TextInput';
import { Button } from '@/stories/common/Input/Button';
import { useTranslation } from 'react-i18next';

const ProfilePasswordSettings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-4 p-4 bg-white rounded-lg'>
      <div className='flex flex-col gap-2 self-center items-center'>
        <h1 className='lg:text-2xl text-xl font-bold text-secondary'>
          {t('profile.changePassword.title')}
        </h1>
        <p className='lg:text-sm text-xs text-secondary'>
          {t('profile.changePassword.description')}
        </p>
      </div>

      <form className='flex flex-col gap-4'>
        <TextInput
          type="password"
          placeholder={t('profile.changePassword.oldPasswordPlaceholder')}
          className='p-4'
        />

        <TextInput
          type="password"
          placeholder={t('profile.changePassword.newPasswordPlaceholder')}
          className='p-4'
        />

        <TextInput
          type="password"
          placeholder={t('profile.changePassword.confirmPasswordPlaceholder')}
          className='p-4'
        />

        <div className='flex flex-col gap-2'>
          <Button
            primary
            label={t('profile.changePassword.submit')}
            size="large"
            onClick={() => console.log('Changing password...')}
            className='!bg-6 hover:bg-6/90 lg:text-base text-sm'
          />
          <Button 
            label={t('profile.changePassword.cancel')}
            size="large"
            onClick={() => console.log('Cancelling...')}
            className='!bg-input-background hover:bg-input-background/90 !text-default-text lg:text-base text-sm'
          />
        </div>
      </form>
    </div>
  );
};

export default ProfilePasswordSettings;

