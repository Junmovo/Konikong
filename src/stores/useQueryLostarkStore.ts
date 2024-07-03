import instance from '@/app/service/service';
import {
  ICharacterCards,
  ICharacterCollect,
  ICharacterEngravings,
  ICharacterGems,
  ICharacterWeapon,
  ICharterInfo,
  ICharterProfiles,
  IDungeons,
  IEventInfo,
  INoticeInfo,
  IRaids,
} from '@/types/Ark';
import { useQueries, useQuery } from '@tanstack/react-query';

const fetchCharacterWeapon = async (id: string): Promise<ICharacterWeapon[]> => {
  const { data } = await instance.get(`/armories/characters/${id}/equipment`);
  return data;
};
const fetchCharacterCollect = async (id: string): Promise<ICharacterCollect[]> => {
  const { data } = await instance.get(`/armories/characters/${id}/collectibles`);
  return data;
};
const fetchCharacterGems = async (id: string): Promise<ICharacterGems> => {
  const { data } = await instance.get(`/armories/characters/${id}/gems`);
  return data;
};
const fetchCharacterEngravings = async (id: string): Promise<ICharacterEngravings> => {
  const { data } = await instance.get(`/armories/characters/${id}/engravings`);
  return data;
};
const fetchCharacterPower = async (id: string): Promise<ICharterProfiles> => {
  const { data } = await instance.get(`/armories/characters/${id}/profiles`);
  return data;
};
const fetchCharacterCard = async (id: string): Promise<ICharacterCards> => {
  const { data } = await instance.get(`/armories/characters/${id}/cards`);
  return data;
};
const fetchCharacterOthers = async (id: string): Promise<ICharterInfo[]> => {
  const { data } = await instance.get(`/characters/${id}/siblings`);
  return data;
};
const fetchEvnet = async (): Promise<IEventInfo[]> => {
  const { data } = await instance.get(`/news/events`);
  return data;
};
const fetchDungeons = async (): Promise<IDungeons[]> => {
  const { data } = await instance.get(`/gamecontents/challenge-abyss-dungeons`);
  return data;
};

const fetchGuardian = async (): Promise<IRaids> => {
  const { data } = await instance.get(`/gamecontents/challenge-guardian-raids`);
  return data;
};

const fetchNotice = async (): Promise<INoticeInfo[]> => {
  const { data } = await instance.get(`/news/notices`);
  return data;
};

export const useCharacterWeapon = (id: string) => {
  return useQuery<ICharacterWeapon[], Error>({
    queryKey: ['CharacterWeapon', id],
    queryFn: () => fetchCharacterWeapon(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export const useEvnet = () => {
  return useQuery<IEventInfo[], Error>({
    queryKey: ['Evnet'],
    queryFn: () => fetchEvnet(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export const useDungeons = () => {
  return useQuery<IDungeons[], Error>({
    queryKey: ['Dungeons'],
    queryFn: () => fetchDungeons(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
export const useGuardian = () => {
  return useQuery<IRaids, Error>({
    queryKey: ['Guardian'],
    queryFn: () => fetchGuardian(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export const useCharacterInfo = (id: string) => {
  return useQuery<ICharterProfiles, Error>({
    queryKey: ['CharacterPowerInfo', id],
    queryFn: () => fetchCharacterPower(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export const useCharacterCollect = (id: string) => {
  const { data: Collect } = useQuery<ICharacterCollect[], Error>({
    queryKey: ['CharacterCollect', id],
    queryFn: () => fetchCharacterCollect(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
  const { data: Gems } = useQuery<ICharacterGems, Error>({
    queryKey: ['CharacterGems', id],
    queryFn: () => fetchCharacterGems(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const { data: Engrav } = useQuery<ICharacterEngravings, Error>({
    queryKey: ['CharacterEngravings', id],
    queryFn: () => fetchCharacterEngravings(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const { data: Power } = useQuery<ICharterProfiles, Error>({
    queryKey: ['CharacterPower', id],
    queryFn: () => fetchCharacterPower(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
  const { data: Card } = useQuery<ICharacterCards, Error>({
    queryKey: ['CharacterCard', id],
    queryFn: () => fetchCharacterCard(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
  const { data: Others } = useQuery<ICharterInfo[], Error>({
    queryKey: ['CharacterOthers', id],
    queryFn: () => fetchCharacterOthers(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return {
    Collect,
    Gems,
    Engrav,
    Power,
    Card,
    Others,
  };
};
