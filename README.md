# Matic Mike Discord Bot

- [https://maticmike.club](https://maticmike.club)
- [Matic Mike Discord](https://discord.gg/XYPpstcXB9)

The Matic Mike NFT is a 100% on-chain project built on the Polygon <-> Ethereum networks introducing more gaming functionality into the NFT space. We've started with 5 contracts, 3 on Polygon (Matic Mike NFT, $HGH Coin, and the MaticMikeData contract) and 2 on ethereum (NFT Bridge and ERC20 Bridge).

## In this repository

This repository contains the custom discordjs bot used to display important information regarding the supply and features of the Matic Mike project

## Discord Bot Commands

**/supply**
*Returns information regarding the supply including...*

- Mikes Minted
- Mikes Burned
- Mikes that have crossed the bridge from Polygon to Ethereum & are in the official Ethereum collection
- Total $HGH in circulation
- Mikes being Staked
- Unique Wallets Staking

**/peek {address}**
*Returns all opensea links of Mikes belonging to address, both staked and unstaked*

**/snapshot {tokenId}**
*Returns all attributes of the Mike as well as a link to opensea, including some simple Battle Royale Stats*

**/powerlevel {tokenId}**
*Returns the powerlevel of the token*

## Bot Commands to Come

**/leaderboard**
*Will return the top ranked MIKES by win percentage, total purse, and total points*

## Packages Used

discordjs, web3, forever