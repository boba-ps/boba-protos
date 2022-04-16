"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarExcelInfo_1 = require("./AvatarExcelInfo");
const AvatarEquipAffixInfo_1 = require("./AvatarEquipAffixInfo");
const AvatarExpeditionState_1 = require("./AvatarExpeditionState");
const AvatarFetterInfo_1 = require("./AvatarFetterInfo");
const AvatarSkillInfo_1 = require("./AvatarSkillInfo");
const TrialAvatarInfo_1 = require("./TrialAvatarInfo");
const PropValue_1 = require("./PropValue");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarInfo", [
            { no: 1, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => PropValue_1.PropValue } },
            { no: 4, name: "life_state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "equip_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "talent_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "fight_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 9, name: "trial_avatar_info", kind: "message", T: () => TrialAvatarInfo_1.TrialAvatarInfo },
            { no: 10, name: "skill_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => AvatarSkillInfo_1.AvatarSkillInfo } },
            { no: 11, name: "skill_depot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "fetter_info", kind: "message", T: () => AvatarFetterInfo_1.AvatarFetterInfo },
            { no: 13, name: "core_proud_skill_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "inherent_proud_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "skill_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 16, name: "expedition_state", kind: "enum", T: () => ["AvatarExpeditionState", AvatarExpeditionState_1.AvatarExpeditionState] },
            { no: 17, name: "proud_skill_extra_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 18, name: "is_focus", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 19, name: "avatar_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "team_resonance_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "wearing_flycloak_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 22, name: "equip_affix_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AvatarEquipAffixInfo_1.AvatarEquipAffixInfo },
            { no: 23, name: "born_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 24, name: "pending_promote_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 25, name: "costume_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 26, name: "excel_info", kind: "message", T: () => AvatarExcelInfo_1.AvatarExcelInfo },
            { no: 27, name: "anim_hash", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarId: 0, guid: 0n, propMap: {}, lifeState: 0, equipGuidList: [], talentIdList: [], fightPropMap: {}, skillMap: {}, skillDepotId: 0, coreProudSkillLevel: 0, inherentProudSkillList: [], skillLevelMap: {}, expeditionState: 0, proudSkillExtraLevelMap: {}, isFocus: false, avatarType: 0, teamResonanceList: [], wearingFlycloakId: 0, equipAffixList: [], bornTime: 0, pendingPromoteRewardList: [], costumeId: 0, animHash: 0 };
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
                case /* uint32 avatar_id */ 1:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint64 guid */ 2:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, PropValue> prop_map */ 3:
                    this.binaryReadMap3(message.propMap, reader, options);
                    break;
                case /* uint32 life_state */ 4:
                    message.lifeState = reader.uint32();
                    break;
                case /* repeated uint64 equip_guid_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.equipGuidList.push(reader.uint64().toBigInt());
                    else
                        message.equipGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated uint32 talent_id_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.talentIdList.push(reader.uint32());
                    else
                        message.talentIdList.push(reader.uint32());
                    break;
                case /* map<uint32, float> fight_prop_map */ 7:
                    this.binaryReadMap7(message.fightPropMap, reader, options);
                    break;
                case /* TrialAvatarInfo trial_avatar_info */ 9:
                    message.trialAvatarInfo = TrialAvatarInfo_1.TrialAvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.trialAvatarInfo);
                    break;
                case /* map<uint32, AvatarSkillInfo> skill_map */ 10:
                    this.binaryReadMap10(message.skillMap, reader, options);
                    break;
                case /* uint32 skill_depot_id */ 11:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* AvatarFetterInfo fetter_info */ 12:
                    message.fetterInfo = AvatarFetterInfo_1.AvatarFetterInfo.internalBinaryRead(reader, reader.uint32(), options, message.fetterInfo);
                    break;
                case /* uint32 core_proud_skill_level */ 13:
                    message.coreProudSkillLevel = reader.uint32();
                    break;
                case /* repeated uint32 inherent_proud_skill_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.inherentProudSkillList.push(reader.uint32());
                    else
                        message.inherentProudSkillList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> skill_level_map */ 15:
                    this.binaryReadMap15(message.skillLevelMap, reader, options);
                    break;
                case /* AvatarExpeditionState expedition_state */ 16:
                    message.expeditionState = reader.int32();
                    break;
                case /* map<uint32, uint32> proud_skill_extra_level_map */ 17:
                    this.binaryReadMap17(message.proudSkillExtraLevelMap, reader, options);
                    break;
                case /* bool is_focus */ 18:
                    message.isFocus = reader.bool();
                    break;
                case /* uint32 avatar_type */ 19:
                    message.avatarType = reader.uint32();
                    break;
                case /* repeated uint32 team_resonance_list */ 20:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.teamResonanceList.push(reader.uint32());
                    else
                        message.teamResonanceList.push(reader.uint32());
                    break;
                case /* uint32 wearing_flycloak_id */ 21:
                    message.wearingFlycloakId = reader.uint32();
                    break;
                case /* repeated AvatarEquipAffixInfo equip_affix_list */ 22:
                    message.equipAffixList.push(AvatarEquipAffixInfo_1.AvatarEquipAffixInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 born_time */ 23:
                    message.bornTime = reader.uint32();
                    break;
                case /* repeated uint32 pending_promote_reward_list */ 24:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.pendingPromoteRewardList.push(reader.uint32());
                    else
                        message.pendingPromoteRewardList.push(reader.uint32());
                    break;
                case /* uint32 costume_id */ 25:
                    message.costumeId = reader.uint32();
                    break;
                case /* AvatarExcelInfo excel_info */ 26:
                    message.excelInfo = AvatarExcelInfo_1.AvatarExcelInfo.internalBinaryRead(reader, reader.uint32(), options, message.excelInfo);
                    break;
                case /* uint32 anim_hash */ 27:
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
    binaryReadMap3(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = PropValue_1.PropValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarInfo.prop_map");
            }
        }
        map[key ?? 0] = val ?? PropValue_1.PropValue.create();
    }
    binaryReadMap7(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarInfo.fight_prop_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap10(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = AvatarSkillInfo_1.AvatarSkillInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarInfo.skill_map");
            }
        }
        map[key ?? 0] = val ?? AvatarSkillInfo_1.AvatarSkillInfo.create();
    }
    binaryReadMap15(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field AvatarInfo.skill_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap17(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field AvatarInfo.proud_skill_extra_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 avatar_id = 1; */
        if (message.avatarId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* uint64 guid = 2; */
        if (message.guid !== 0n)
            writer.tag(2, runtime_2.WireType.Varint).uint64(message.guid);
        /* map<uint32, PropValue> prop_map = 3; */
        for (let k of Object.keys(message.propMap)) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            PropValue_1.PropValue.internalBinaryWrite(message.propMap[k], writer, options);
            writer.join().join();
        }
        /* uint32 life_state = 4; */
        if (message.lifeState !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.lifeState);
        /* repeated uint64 equip_guid_list = 5; */
        if (message.equipGuidList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.equipGuidList.length; i++)
                writer.uint64(message.equipGuidList[i]);
            writer.join();
        }
        /* repeated uint32 talent_id_list = 6; */
        if (message.talentIdList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.talentIdList.length; i++)
                writer.uint32(message.talentIdList[i]);
            writer.join();
        }
        /* map<uint32, float> fight_prop_map = 7; */
        for (let k of Object.keys(message.fightPropMap))
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Bit32).float(message.fightPropMap[k]).join();
        /* TrialAvatarInfo trial_avatar_info = 9; */
        if (message.trialAvatarInfo)
            TrialAvatarInfo_1.TrialAvatarInfo.internalBinaryWrite(message.trialAvatarInfo, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, AvatarSkillInfo> skill_map = 10; */
        for (let k of Object.keys(message.skillMap)) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            AvatarSkillInfo_1.AvatarSkillInfo.internalBinaryWrite(message.skillMap[k], writer, options);
            writer.join().join();
        }
        /* uint32 skill_depot_id = 11; */
        if (message.skillDepotId !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.skillDepotId);
        /* AvatarFetterInfo fetter_info = 12; */
        if (message.fetterInfo)
            AvatarFetterInfo_1.AvatarFetterInfo.internalBinaryWrite(message.fetterInfo, writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 core_proud_skill_level = 13; */
        if (message.coreProudSkillLevel !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.coreProudSkillLevel);
        /* repeated uint32 inherent_proud_skill_list = 14; */
        if (message.inherentProudSkillList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.inherentProudSkillList.length; i++)
                writer.uint32(message.inherentProudSkillList[i]);
            writer.join();
        }
        /* map<uint32, uint32> skill_level_map = 15; */
        for (let k of Object.keys(message.skillLevelMap))
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.skillLevelMap[k]).join();
        /* AvatarExpeditionState expedition_state = 16; */
        if (message.expeditionState !== 0)
            writer.tag(16, runtime_2.WireType.Varint).int32(message.expeditionState);
        /* map<uint32, uint32> proud_skill_extra_level_map = 17; */
        for (let k of Object.keys(message.proudSkillExtraLevelMap))
            writer.tag(17, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.proudSkillExtraLevelMap[k]).join();
        /* bool is_focus = 18; */
        if (message.isFocus !== false)
            writer.tag(18, runtime_2.WireType.Varint).bool(message.isFocus);
        /* uint32 avatar_type = 19; */
        if (message.avatarType !== 0)
            writer.tag(19, runtime_2.WireType.Varint).uint32(message.avatarType);
        /* repeated uint32 team_resonance_list = 20; */
        if (message.teamResonanceList.length) {
            writer.tag(20, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.teamResonanceList.length; i++)
                writer.uint32(message.teamResonanceList[i]);
            writer.join();
        }
        /* uint32 wearing_flycloak_id = 21; */
        if (message.wearingFlycloakId !== 0)
            writer.tag(21, runtime_2.WireType.Varint).uint32(message.wearingFlycloakId);
        /* repeated AvatarEquipAffixInfo equip_affix_list = 22; */
        for (let i = 0; i < message.equipAffixList.length; i++)
            AvatarEquipAffixInfo_1.AvatarEquipAffixInfo.internalBinaryWrite(message.equipAffixList[i], writer.tag(22, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 born_time = 23; */
        if (message.bornTime !== 0)
            writer.tag(23, runtime_2.WireType.Varint).uint32(message.bornTime);
        /* repeated uint32 pending_promote_reward_list = 24; */
        if (message.pendingPromoteRewardList.length) {
            writer.tag(24, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.pendingPromoteRewardList.length; i++)
                writer.uint32(message.pendingPromoteRewardList[i]);
            writer.join();
        }
        /* uint32 costume_id = 25; */
        if (message.costumeId !== 0)
            writer.tag(25, runtime_2.WireType.Varint).uint32(message.costumeId);
        /* AvatarExcelInfo excel_info = 26; */
        if (message.excelInfo)
            AvatarExcelInfo_1.AvatarExcelInfo.internalBinaryWrite(message.excelInfo, writer.tag(26, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 anim_hash = 27; */
        if (message.animHash !== 0)
            writer.tag(27, runtime_2.WireType.Varint).uint32(message.animHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarInfo
 */
exports.AvatarInfo = new AvatarInfo$Type();
