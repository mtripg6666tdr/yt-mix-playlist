import MixPlaylist from './entities/MixPlaylist.js';

export default async function getMixPlaylist(videoId: string, options?: { gl?: string, hl?: string, preferInitialPlaylistGuessing?: boolean }): Promise<MixPlaylist | null> {
  return MixPlaylist.fetch(videoId, options);
}

export { default as MixPlaylist } from './entities/MixPlaylist.js';
export { default as MixPlaylistItem } from './entities/MixPlaylistItem.js';
