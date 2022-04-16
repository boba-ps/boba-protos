"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerLoginRsp = exports.PlayerLoginRsp_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FeatureBlockInfo_1 = require("./FeatureBlockInfo");
const ShortAbilityHashPair_1 = require("./ShortAbilityHashPair");
const BlockInfo_1 = require("./BlockInfo");
const ResVersionConfig_1 = require("./ResVersionConfig");
/**
 * @generated from protobuf enum PlayerLoginRsp.CmdId
 */
var PlayerLoginRsp_CmdId;
(function (PlayerLoginRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLoginRsp_CmdId[PlayerLoginRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerLoginRsp_CmdId[PlayerLoginRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerLoginRsp_CmdId[PlayerLoginRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: CMD_ID = 184;
     */
    PlayerLoginRsp_CmdId[PlayerLoginRsp_CmdId["CMD_ID"] = 184] = "CMD_ID";
})(PlayerLoginRsp_CmdId = exports.PlayerLoginRsp_CmdId || (exports.PlayerLoginRsp_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLoginRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerLoginRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "player_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "is_new_player", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "login_rand", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "is_use_ability_hash", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "ability_hash_code", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "ability_hash_map", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 9, name: "client_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_relogin", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "client_silence_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "game_biz", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "player_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 16, name: "client_md5", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 17, name: "client_silence_md5", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 20, name: "res_version_config", kind: "message", T: () => ResVersionConfig_1.ResVersionConfig },
            { no: 21, name: "block_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => BlockInfo_1.BlockInfo } },
            { no: 24, name: "client_version_suffix", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 25, name: "client_silence_version_suffix", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 27, name: "short_ability_hash_map", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ShortAbilityHashPair_1.ShortAbilityHashPair },
            { no: 28, name: "sc_info", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 29, name: "is_audit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 30, name: "is_sc_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 31, name: "register_cps", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 32, name: "feature_block_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FeatureBlockInfo_1.FeatureBlockInfo },
            { no: 33, name: "is_data_need_relogin", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 34, name: "country_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 35, name: "next_res_version_config", kind: "message", T: () => ResVersionConfig_1.ResVersionConfig },
            { no: 36, name: "next_resource_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 37, name: "target_home_owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 38, name: "is_enable_client_hash_debug", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 39, name: "is_transfer", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 40, name: "total_tick_time", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, playerData: new Uint8Array(0), isNewPlayer: false, targetUid: 0, loginRand: 0n, isUseAbilityHash: false, abilityHashCode: 0, abilityHashMap: {}, clientDataVersion: 0, isRelogin: false, clientSilenceDataVersion: 0, gameBiz: "", playerDataVersion: 0, clientMd5: "", clientSilenceMd5: "", blockInfoMap: {}, clientVersionSuffix: "", clientSilenceVersionSuffix: "", shortAbilityHashMap: [], scInfo: new Uint8Array(0), isAudit: false, isScOpen: false, registerCps: "", featureBlockInfoList: [], isDataNeedRelogin: false, countryCode: "", nextResourceUrl: "", targetHomeOwnerUid: 0, isEnableClientHashDebug: false, isTransfer: false, totalTickTime: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* bytes player_data */ 2:
                    message.playerData = reader.bytes();
                    break;
                case /* bool is_new_player */ 3:
                    message.isNewPlayer = reader.bool();
                    break;
                case /* uint32 target_uid */ 4:
                    message.targetUid = reader.uint32();
                    break;
                case /* uint64 login_rand */ 5:
                    message.loginRand = reader.uint64().toBigInt();
                    break;
                case /* bool is_use_ability_hash */ 6:
                    message.isUseAbilityHash = reader.bool();
                    break;
                case /* int32 ability_hash_code */ 7:
                    message.abilityHashCode = reader.int32();
                    break;
                case /* map<string, int32> ability_hash_map */ 8:
                    this.binaryReadMap8(message.abilityHashMap, reader, options);
                    break;
                case /* uint32 client_data_version */ 9:
                    message.clientDataVersion = reader.uint32();
                    break;
                case /* bool is_relogin */ 11:
                    message.isRelogin = reader.bool();
                    break;
                case /* uint32 client_silence_data_version */ 13:
                    message.clientSilenceDataVersion = reader.uint32();
                    break;
                case /* string game_biz */ 14:
                    message.gameBiz = reader.string();
                    break;
                case /* uint32 player_data_version */ 15:
                    message.playerDataVersion = reader.uint32();
                    break;
                case /* string client_md5 */ 16:
                    message.clientMd5 = reader.string();
                    break;
                case /* string client_silence_md5 */ 17:
                    message.clientSilenceMd5 = reader.string();
                    break;
                case /* ResVersionConfig res_version_config */ 20:
                    message.resVersionConfig = ResVersionConfig_1.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.resVersionConfig);
                    break;
                case /* map<uint32, BlockInfo> block_info_map */ 21:
                    this.binaryReadMap21(message.blockInfoMap, reader, options);
                    break;
                case /* string client_version_suffix */ 24:
                    message.clientVersionSuffix = reader.string();
                    break;
                case /* string client_silence_version_suffix */ 25:
                    message.clientSilenceVersionSuffix = reader.string();
                    break;
                case /* repeated ShortAbilityHashPair short_ability_hash_map */ 27:
                    message.shortAbilityHashMap.push(ShortAbilityHashPair_1.ShortAbilityHashPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bytes sc_info */ 28:
                    message.scInfo = reader.bytes();
                    break;
                case /* bool is_audit */ 29:
                    message.isAudit = reader.bool();
                    break;
                case /* bool is_sc_open */ 30:
                    message.isScOpen = reader.bool();
                    break;
                case /* string register_cps */ 31:
                    message.registerCps = reader.string();
                    break;
                case /* repeated FeatureBlockInfo feature_block_info_list */ 32:
                    message.featureBlockInfoList.push(FeatureBlockInfo_1.FeatureBlockInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_data_need_relogin */ 33:
                    message.isDataNeedRelogin = reader.bool();
                    break;
                case /* string country_code */ 34:
                    message.countryCode = reader.string();
                    break;
                case /* ResVersionConfig next_res_version_config */ 35:
                    message.nextResVersionConfig = ResVersionConfig_1.ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.nextResVersionConfig);
                    break;
                case /* string next_resource_url */ 36:
                    message.nextResourceUrl = reader.string();
                    break;
                case /* uint32 target_home_owner_uid */ 37:
                    message.targetHomeOwnerUid = reader.uint32();
                    break;
                case /* bool is_enable_client_hash_debug */ 38:
                    message.isEnableClientHashDebug = reader.bool();
                    break;
                case /* bool is_transfer */ 39:
                    message.isTransfer = reader.bool();
                    break;
                case /* double total_tick_time */ 40:
                    message.totalTickTime = reader.double();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap8(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlayerLoginRsp.ability_hash_map");
            }
        }
        map[key ?? ""] = val ?? 0;
    }
    binaryReadMap21(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = BlockInfo_1.BlockInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlayerLoginRsp.block_info_map");
            }
        }
        map[key ?? 0] = val ?? BlockInfo_1.BlockInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* bytes player_data = 2; */
        if (message.playerData.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.playerData);
        /* bool is_new_player = 3; */
        if (message.isNewPlayer !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isNewPlayer);
        /* uint32 target_uid = 4; */
        if (message.targetUid !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* uint64 login_rand = 5; */
        if (message.loginRand !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.loginRand);
        /* bool is_use_ability_hash = 6; */
        if (message.isUseAbilityHash !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isUseAbilityHash);
        /* int32 ability_hash_code = 7; */
        if (message.abilityHashCode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.abilityHashCode);
        /* map<string, int32> ability_hash_map = 8; */
        for (let k of Object.keys(message.abilityHashMap))
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.LengthDelimited).string(k).tag(2, runtime_1.WireType.Varint).int32(message.abilityHashMap[k]).join();
        /* uint32 client_data_version = 9; */
        if (message.clientDataVersion !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.clientDataVersion);
        /* bool is_relogin = 11; */
        if (message.isRelogin !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isRelogin);
        /* uint32 client_silence_data_version = 13; */
        if (message.clientSilenceDataVersion !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.clientSilenceDataVersion);
        /* string game_biz = 14; */
        if (message.gameBiz !== "")
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.gameBiz);
        /* uint32 player_data_version = 15; */
        if (message.playerDataVersion !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.playerDataVersion);
        /* string client_md5 = 16; */
        if (message.clientMd5 !== "")
            writer.tag(16, runtime_1.WireType.LengthDelimited).string(message.clientMd5);
        /* string client_silence_md5 = 17; */
        if (message.clientSilenceMd5 !== "")
            writer.tag(17, runtime_1.WireType.LengthDelimited).string(message.clientSilenceMd5);
        /* ResVersionConfig res_version_config = 20; */
        if (message.resVersionConfig)
            ResVersionConfig_1.ResVersionConfig.internalBinaryWrite(message.resVersionConfig, writer.tag(20, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, BlockInfo> block_info_map = 21; */
        for (let k of Object.keys(message.blockInfoMap)) {
            writer.tag(21, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            BlockInfo_1.BlockInfo.internalBinaryWrite(message.blockInfoMap[k], writer, options);
            writer.join().join();
        }
        /* string client_version_suffix = 24; */
        if (message.clientVersionSuffix !== "")
            writer.tag(24, runtime_1.WireType.LengthDelimited).string(message.clientVersionSuffix);
        /* string client_silence_version_suffix = 25; */
        if (message.clientSilenceVersionSuffix !== "")
            writer.tag(25, runtime_1.WireType.LengthDelimited).string(message.clientSilenceVersionSuffix);
        /* repeated ShortAbilityHashPair short_ability_hash_map = 27; */
        for (let i = 0; i < message.shortAbilityHashMap.length; i++)
            ShortAbilityHashPair_1.ShortAbilityHashPair.internalBinaryWrite(message.shortAbilityHashMap[i], writer.tag(27, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bytes sc_info = 28; */
        if (message.scInfo.length)
            writer.tag(28, runtime_1.WireType.LengthDelimited).bytes(message.scInfo);
        /* bool is_audit = 29; */
        if (message.isAudit !== false)
            writer.tag(29, runtime_1.WireType.Varint).bool(message.isAudit);
        /* bool is_sc_open = 30; */
        if (message.isScOpen !== false)
            writer.tag(30, runtime_1.WireType.Varint).bool(message.isScOpen);
        /* string register_cps = 31; */
        if (message.registerCps !== "")
            writer.tag(31, runtime_1.WireType.LengthDelimited).string(message.registerCps);
        /* repeated FeatureBlockInfo feature_block_info_list = 32; */
        for (let i = 0; i < message.featureBlockInfoList.length; i++)
            FeatureBlockInfo_1.FeatureBlockInfo.internalBinaryWrite(message.featureBlockInfoList[i], writer.tag(32, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_data_need_relogin = 33; */
        if (message.isDataNeedRelogin !== false)
            writer.tag(33, runtime_1.WireType.Varint).bool(message.isDataNeedRelogin);
        /* string country_code = 34; */
        if (message.countryCode !== "")
            writer.tag(34, runtime_1.WireType.LengthDelimited).string(message.countryCode);
        /* ResVersionConfig next_res_version_config = 35; */
        if (message.nextResVersionConfig)
            ResVersionConfig_1.ResVersionConfig.internalBinaryWrite(message.nextResVersionConfig, writer.tag(35, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string next_resource_url = 36; */
        if (message.nextResourceUrl !== "")
            writer.tag(36, runtime_1.WireType.LengthDelimited).string(message.nextResourceUrl);
        /* uint32 target_home_owner_uid = 37; */
        if (message.targetHomeOwnerUid !== 0)
            writer.tag(37, runtime_1.WireType.Varint).uint32(message.targetHomeOwnerUid);
        /* bool is_enable_client_hash_debug = 38; */
        if (message.isEnableClientHashDebug !== false)
            writer.tag(38, runtime_1.WireType.Varint).bool(message.isEnableClientHashDebug);
        /* bool is_transfer = 39; */
        if (message.isTransfer !== false)
            writer.tag(39, runtime_1.WireType.Varint).bool(message.isTransfer);
        /* double total_tick_time = 40; */
        if (message.totalTickTime !== 0)
            writer.tag(40, runtime_1.WireType.Bit64).double(message.totalTickTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerLoginRsp
 */
exports.PlayerLoginRsp = new PlayerLoginRsp$Type();
