"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneAvatarInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarExcelInfo_1 = require("./AvatarExcelInfo");
const CurVehicleInfo_1 = require("./CurVehicleInfo");
const ServerBuff_1 = require("./ServerBuff");
const SceneReliquaryInfo_1 = require("./SceneReliquaryInfo");
const SceneWeaponInfo_1 = require("./SceneWeaponInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneAvatarInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneAvatarInfo", [
            { no: 1, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "equip_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "skill_depot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "talent_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "weapon", kind: "message", T: () => SceneWeaponInfo_1.SceneWeaponInfo },
            { no: 9, name: "reliquary_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SceneReliquaryInfo_1.SceneReliquaryInfo },
            { no: 11, name: "core_proud_skill_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "inherent_proud_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "skill_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 14, name: "proud_skill_extra_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 15, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ServerBuff_1.ServerBuff },
            { no: 16, name: "team_resonance_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 17, name: "wearing_flycloak_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "born_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "costume_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "cur_vehicle_info", kind: "message", T: () => CurVehicleInfo_1.CurVehicleInfo },
            { no: 21, name: "excel_info", kind: "message", T: () => AvatarExcelInfo_1.AvatarExcelInfo },
            { no: 22, name: "anim_hash", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, avatarId: 0, guid: 0n, peerId: 0, equipIdList: [], skillDepotId: 0, talentIdList: [], reliquaryList: [], coreProudSkillLevel: 0, inherentProudSkillList: [], skillLevelMap: {}, proudSkillExtraLevelMap: {}, serverBuffList: [], teamResonanceList: [], wearingFlycloakId: 0, bornTime: 0, costumeId: 0, animHash: 0 };
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
                case /* uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 2:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint64 guid */ 3:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* uint32 peer_id */ 4:
                    message.peerId = reader.uint32();
                    break;
                case /* repeated uint32 equip_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.equipIdList.push(reader.uint32());
                    else
                        message.equipIdList.push(reader.uint32());
                    break;
                case /* uint32 skill_depot_id */ 6:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* repeated uint32 talent_id_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.talentIdList.push(reader.uint32());
                    else
                        message.talentIdList.push(reader.uint32());
                    break;
                case /* SceneWeaponInfo weapon */ 8:
                    message.weapon = SceneWeaponInfo_1.SceneWeaponInfo.internalBinaryRead(reader, reader.uint32(), options, message.weapon);
                    break;
                case /* repeated SceneReliquaryInfo reliquary_list */ 9:
                    message.reliquaryList.push(SceneReliquaryInfo_1.SceneReliquaryInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 core_proud_skill_level */ 11:
                    message.coreProudSkillLevel = reader.uint32();
                    break;
                case /* repeated uint32 inherent_proud_skill_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.inherentProudSkillList.push(reader.uint32());
                    else
                        message.inherentProudSkillList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> skill_level_map */ 13:
                    this.binaryReadMap13(message.skillLevelMap, reader, options);
                    break;
                case /* map<uint32, uint32> proud_skill_extra_level_map */ 14:
                    this.binaryReadMap14(message.proudSkillExtraLevelMap, reader, options);
                    break;
                case /* repeated ServerBuff server_buff_list */ 15:
                    message.serverBuffList.push(ServerBuff_1.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 team_resonance_list */ 16:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.teamResonanceList.push(reader.uint32());
                    else
                        message.teamResonanceList.push(reader.uint32());
                    break;
                case /* uint32 wearing_flycloak_id */ 17:
                    message.wearingFlycloakId = reader.uint32();
                    break;
                case /* uint32 born_time */ 18:
                    message.bornTime = reader.uint32();
                    break;
                case /* uint32 costume_id */ 19:
                    message.costumeId = reader.uint32();
                    break;
                case /* CurVehicleInfo cur_vehicle_info */ 20:
                    message.curVehicleInfo = CurVehicleInfo_1.CurVehicleInfo.internalBinaryRead(reader, reader.uint32(), options, message.curVehicleInfo);
                    break;
                case /* AvatarExcelInfo excel_info */ 21:
                    message.excelInfo = AvatarExcelInfo_1.AvatarExcelInfo.internalBinaryRead(reader, reader.uint32(), options, message.excelInfo);
                    break;
                case /* uint32 anim_hash */ 22:
                    message.animHash = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap13(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SceneAvatarInfo.skill_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap14(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SceneAvatarInfo.proud_skill_extra_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 uid = 1; */
        if (message.uid !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.uid);
        /* uint32 avatar_id = 2; */
        if (message.avatarId !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* uint64 guid = 3; */
        if (message.guid !== 0n)
            writer.tag(3, runtime_2.WireType.Varint).uint64(message.guid);
        /* uint32 peer_id = 4; */
        if (message.peerId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.peerId);
        /* repeated uint32 equip_id_list = 5; */
        if (message.equipIdList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.equipIdList.length; i++)
                writer.uint32(message.equipIdList[i]);
            writer.join();
        }
        /* uint32 skill_depot_id = 6; */
        if (message.skillDepotId !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.skillDepotId);
        /* repeated uint32 talent_id_list = 7; */
        if (message.talentIdList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.talentIdList.length; i++)
                writer.uint32(message.talentIdList[i]);
            writer.join();
        }
        /* SceneWeaponInfo weapon = 8; */
        if (message.weapon)
            SceneWeaponInfo_1.SceneWeaponInfo.internalBinaryWrite(message.weapon, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated SceneReliquaryInfo reliquary_list = 9; */
        for (let i = 0; i < message.reliquaryList.length; i++)
            SceneReliquaryInfo_1.SceneReliquaryInfo.internalBinaryWrite(message.reliquaryList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 core_proud_skill_level = 11; */
        if (message.coreProudSkillLevel !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.coreProudSkillLevel);
        /* repeated uint32 inherent_proud_skill_list = 12; */
        if (message.inherentProudSkillList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.inherentProudSkillList.length; i++)
                writer.uint32(message.inherentProudSkillList[i]);
            writer.join();
        }
        /* map<uint32, uint32> skill_level_map = 13; */
        for (let k of Object.keys(message.skillLevelMap))
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.skillLevelMap[k]).join();
        /* map<uint32, uint32> proud_skill_extra_level_map = 14; */
        for (let k of Object.keys(message.proudSkillExtraLevelMap))
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.proudSkillExtraLevelMap[k]).join();
        /* repeated ServerBuff server_buff_list = 15; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            ServerBuff_1.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 team_resonance_list = 16; */
        if (message.teamResonanceList.length) {
            writer.tag(16, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.teamResonanceList.length; i++)
                writer.uint32(message.teamResonanceList[i]);
            writer.join();
        }
        /* uint32 wearing_flycloak_id = 17; */
        if (message.wearingFlycloakId !== 0)
            writer.tag(17, runtime_2.WireType.Varint).uint32(message.wearingFlycloakId);
        /* uint32 born_time = 18; */
        if (message.bornTime !== 0)
            writer.tag(18, runtime_2.WireType.Varint).uint32(message.bornTime);
        /* uint32 costume_id = 19; */
        if (message.costumeId !== 0)
            writer.tag(19, runtime_2.WireType.Varint).uint32(message.costumeId);
        /* CurVehicleInfo cur_vehicle_info = 20; */
        if (message.curVehicleInfo)
            CurVehicleInfo_1.CurVehicleInfo.internalBinaryWrite(message.curVehicleInfo, writer.tag(20, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* AvatarExcelInfo excel_info = 21; */
        if (message.excelInfo)
            AvatarExcelInfo_1.AvatarExcelInfo.internalBinaryWrite(message.excelInfo, writer.tag(21, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 anim_hash = 22; */
        if (message.animHash !== 0)
            writer.tag(22, runtime_2.WireType.Varint).uint32(message.animHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneAvatarInfo
 */
exports.SceneAvatarInfo = new SceneAvatarInfo$Type();
