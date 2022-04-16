"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneMonsterInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MonsterRoute_1 = require("./MonsterRoute");
const MonsterBornType_1 = require("./MonsterBornType");
const SceneWeaponInfo_1 = require("./SceneWeaponInfo");
const SceneFishInfo_1 = require("./SceneFishInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneMonsterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneMonsterInfo", [
            { no: 50, name: "fish_info", kind: "message", oneof: "content", T: () => SceneFishInfo_1.SceneFishInfo },
            { no: 1, name: "monster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "weapon_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SceneWeaponInfo_1.SceneWeaponInfo },
            { no: 5, name: "authority_peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "affix_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_elite", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "owner_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "summoned_tag", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "summon_tag_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 11, name: "pose_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "born_type", kind: "enum", T: () => ["MonsterBornType", MonsterBornType_1.MonsterBornType] },
            { no: 13, name: "block_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "mark_flag", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "title_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 16, name: "special_name_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 17, name: "attack_target_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "monster_route", kind: "message", T: () => MonsterRoute_1.MonsterRoute },
            { no: 19, name: "ai_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "level_route_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "init_pose_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { content: { oneofKind: undefined }, monsterId: 0, groupId: 0, configId: 0, weaponList: [], authorityPeerId: 0, affixList: [], isElite: false, ownerEntityId: 0, summonedTag: 0, summonTagMap: {}, poseId: 0, bornType: 0, blockId: 0, markFlag: 0, titleId: 0, specialNameId: 0, attackTargetId: 0, aiConfigId: 0, levelRouteId: 0, initPoseId: 0 };
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
                case /* SceneFishInfo fish_info */ 50:
                    message.content = {
                        oneofKind: "fishInfo",
                        fishInfo: SceneFishInfo_1.SceneFishInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.fishInfo)
                    };
                    break;
                case /* uint32 monster_id */ 1:
                    message.monsterId = reader.uint32();
                    break;
                case /* uint32 group_id */ 2:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 config_id */ 3:
                    message.configId = reader.uint32();
                    break;
                case /* repeated SceneWeaponInfo weapon_list */ 4:
                    message.weaponList.push(SceneWeaponInfo_1.SceneWeaponInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 authority_peer_id */ 5:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* repeated uint32 affix_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.affixList.push(reader.uint32());
                    else
                        message.affixList.push(reader.uint32());
                    break;
                case /* bool is_elite */ 7:
                    message.isElite = reader.bool();
                    break;
                case /* uint32 owner_entity_id */ 8:
                    message.ownerEntityId = reader.uint32();
                    break;
                case /* uint32 summoned_tag */ 9:
                    message.summonedTag = reader.uint32();
                    break;
                case /* map<uint32, uint32> summon_tag_map */ 10:
                    this.binaryReadMap10(message.summonTagMap, reader, options);
                    break;
                case /* uint32 pose_id */ 11:
                    message.poseId = reader.uint32();
                    break;
                case /* MonsterBornType born_type */ 12:
                    message.bornType = reader.int32();
                    break;
                case /* uint32 block_id */ 13:
                    message.blockId = reader.uint32();
                    break;
                case /* uint32 mark_flag */ 14:
                    message.markFlag = reader.uint32();
                    break;
                case /* uint32 title_id */ 15:
                    message.titleId = reader.uint32();
                    break;
                case /* uint32 special_name_id */ 16:
                    message.specialNameId = reader.uint32();
                    break;
                case /* uint32 attack_target_id */ 17:
                    message.attackTargetId = reader.uint32();
                    break;
                case /* MonsterRoute monster_route */ 18:
                    message.monsterRoute = MonsterRoute_1.MonsterRoute.internalBinaryRead(reader, reader.uint32(), options, message.monsterRoute);
                    break;
                case /* uint32 ai_config_id */ 19:
                    message.aiConfigId = reader.uint32();
                    break;
                case /* uint32 level_route_id */ 20:
                    message.levelRouteId = reader.uint32();
                    break;
                case /* uint32 init_pose_id */ 21:
                    message.initPoseId = reader.uint32();
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
    binaryReadMap10(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field SceneMonsterInfo.summon_tag_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* SceneFishInfo fish_info = 50; */
        if (message.content.oneofKind === "fishInfo")
            SceneFishInfo_1.SceneFishInfo.internalBinaryWrite(message.content.fishInfo, writer.tag(50, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 monster_id = 1; */
        if (message.monsterId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.monsterId);
        /* uint32 group_id = 2; */
        if (message.groupId !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.groupId);
        /* uint32 config_id = 3; */
        if (message.configId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.configId);
        /* repeated SceneWeaponInfo weapon_list = 4; */
        for (let i = 0; i < message.weaponList.length; i++)
            SceneWeaponInfo_1.SceneWeaponInfo.internalBinaryWrite(message.weaponList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 authority_peer_id = 5; */
        if (message.authorityPeerId !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.authorityPeerId);
        /* repeated uint32 affix_list = 6; */
        if (message.affixList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.affixList.length; i++)
                writer.uint32(message.affixList[i]);
            writer.join();
        }
        /* bool is_elite = 7; */
        if (message.isElite !== false)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isElite);
        /* uint32 owner_entity_id = 8; */
        if (message.ownerEntityId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.ownerEntityId);
        /* uint32 summoned_tag = 9; */
        if (message.summonedTag !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.summonedTag);
        /* map<uint32, uint32> summon_tag_map = 10; */
        for (let k of Object.keys(message.summonTagMap))
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.summonTagMap[k]).join();
        /* uint32 pose_id = 11; */
        if (message.poseId !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.poseId);
        /* MonsterBornType born_type = 12; */
        if (message.bornType !== 0)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.bornType);
        /* uint32 block_id = 13; */
        if (message.blockId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.blockId);
        /* uint32 mark_flag = 14; */
        if (message.markFlag !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.markFlag);
        /* uint32 title_id = 15; */
        if (message.titleId !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.titleId);
        /* uint32 special_name_id = 16; */
        if (message.specialNameId !== 0)
            writer.tag(16, runtime_2.WireType.Varint).uint32(message.specialNameId);
        /* uint32 attack_target_id = 17; */
        if (message.attackTargetId !== 0)
            writer.tag(17, runtime_2.WireType.Varint).uint32(message.attackTargetId);
        /* MonsterRoute monster_route = 18; */
        if (message.monsterRoute)
            MonsterRoute_1.MonsterRoute.internalBinaryWrite(message.monsterRoute, writer.tag(18, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 ai_config_id = 19; */
        if (message.aiConfigId !== 0)
            writer.tag(19, runtime_2.WireType.Varint).uint32(message.aiConfigId);
        /* uint32 level_route_id = 20; */
        if (message.levelRouteId !== 0)
            writer.tag(20, runtime_2.WireType.Varint).uint32(message.levelRouteId);
        /* uint32 init_pose_id = 21; */
        if (message.initPoseId !== 0)
            writer.tag(21, runtime_2.WireType.Varint).uint32(message.initPoseId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneMonsterInfo
 */
exports.SceneMonsterInfo = new SceneMonsterInfo$Type();
