"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneEntityInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ServerBuff_1 = require("./ServerBuff");
const EntityAuthorityInfo_1 = require("./EntityAuthorityInfo");
const EntityEnvironmentInfo_1 = require("./EntityEnvironmentInfo");
const EntityClientData_1 = require("./EntityClientData");
const AnimatorParameterValueInfoPair_1 = require("./AnimatorParameterValueInfoPair");
const FightPropPair_1 = require("./FightPropPair");
const PropPair_1 = require("./PropPair");
const MotionInfo_1 = require("./MotionInfo");
const ProtEntityType_1 = require("./ProtEntityType");
const SceneGadgetInfo_1 = require("./SceneGadgetInfo");
const SceneNpcInfo_1 = require("./SceneNpcInfo");
const SceneMonsterInfo_1 = require("./SceneMonsterInfo");
const SceneAvatarInfo_1 = require("./SceneAvatarInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneEntityInfo", [
            { no: 10, name: "avatar", kind: "message", oneof: "entity", T: () => SceneAvatarInfo_1.SceneAvatarInfo },
            { no: 11, name: "monster", kind: "message", oneof: "entity", T: () => SceneMonsterInfo_1.SceneMonsterInfo },
            { no: 12, name: "npc", kind: "message", oneof: "entity", T: () => SceneNpcInfo_1.SceneNpcInfo },
            { no: 13, name: "gadget", kind: "message", oneof: "entity", T: () => SceneGadgetInfo_1.SceneGadgetInfo },
            { no: 1, name: "entity_type", kind: "enum", T: () => ["ProtEntityType", ProtEntityType_1.ProtEntityType] },
            { no: 2, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "motion_info", kind: "message", T: () => MotionInfo_1.MotionInfo },
            { no: 5, name: "prop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PropPair_1.PropPair },
            { no: 6, name: "fight_prop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FightPropPair_1.FightPropPair },
            { no: 7, name: "life_state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "animator_para_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AnimatorParameterValueInfoPair_1.AnimatorParameterValueInfoPair },
            { no: 17, name: "last_move_scene_time_ms", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "last_move_reliable_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "entity_client_data", kind: "message", T: () => EntityClientData_1.EntityClientData },
            { no: 20, name: "entity_environment_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EntityEnvironmentInfo_1.EntityEnvironmentInfo },
            { no: 21, name: "entity_authority_info", kind: "message", T: () => EntityAuthorityInfo_1.EntityAuthorityInfo },
            { no: 22, name: "tag_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 23, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ServerBuff_1.ServerBuff }
        ]);
    }
    create(value) {
        const message = { entity: { oneofKind: undefined }, entityType: 0, entityId: 0, name: "", propList: [], fightPropList: [], lifeState: 0, animatorParaList: [], lastMoveSceneTimeMs: 0, lastMoveReliableSeq: 0, entityEnvironmentInfoList: [], tagList: [], serverBuffList: [] };
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
                case /* SceneAvatarInfo avatar */ 10:
                    message.entity = {
                        oneofKind: "avatar",
                        avatar: SceneAvatarInfo_1.SceneAvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity.avatar)
                    };
                    break;
                case /* SceneMonsterInfo monster */ 11:
                    message.entity = {
                        oneofKind: "monster",
                        monster: SceneMonsterInfo_1.SceneMonsterInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity.monster)
                    };
                    break;
                case /* SceneNpcInfo npc */ 12:
                    message.entity = {
                        oneofKind: "npc",
                        npc: SceneNpcInfo_1.SceneNpcInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity.npc)
                    };
                    break;
                case /* SceneGadgetInfo gadget */ 13:
                    message.entity = {
                        oneofKind: "gadget",
                        gadget: SceneGadgetInfo_1.SceneGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity.gadget)
                    };
                    break;
                case /* ProtEntityType entity_type */ 1:
                    message.entityType = reader.int32();
                    break;
                case /* uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
                    break;
                case /* string name */ 3:
                    message.name = reader.string();
                    break;
                case /* MotionInfo motion_info */ 4:
                    message.motionInfo = MotionInfo_1.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.motionInfo);
                    break;
                case /* repeated PropPair prop_list */ 5:
                    message.propList.push(PropPair_1.PropPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated FightPropPair fight_prop_list */ 6:
                    message.fightPropList.push(FightPropPair_1.FightPropPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 life_state */ 7:
                    message.lifeState = reader.uint32();
                    break;
                case /* repeated AnimatorParameterValueInfoPair animator_para_list */ 9:
                    message.animatorParaList.push(AnimatorParameterValueInfoPair_1.AnimatorParameterValueInfoPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 last_move_scene_time_ms */ 17:
                    message.lastMoveSceneTimeMs = reader.uint32();
                    break;
                case /* uint32 last_move_reliable_seq */ 18:
                    message.lastMoveReliableSeq = reader.uint32();
                    break;
                case /* EntityClientData entity_client_data */ 19:
                    message.entityClientData = EntityClientData_1.EntityClientData.internalBinaryRead(reader, reader.uint32(), options, message.entityClientData);
                    break;
                case /* repeated EntityEnvironmentInfo entity_environment_info_list */ 20:
                    message.entityEnvironmentInfoList.push(EntityEnvironmentInfo_1.EntityEnvironmentInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* EntityAuthorityInfo entity_authority_info */ 21:
                    message.entityAuthorityInfo = EntityAuthorityInfo_1.EntityAuthorityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityAuthorityInfo);
                    break;
                case /* repeated string tag_list */ 22:
                    message.tagList.push(reader.string());
                    break;
                case /* repeated ServerBuff server_buff_list */ 23:
                    message.serverBuffList.push(ServerBuff_1.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message, writer, options) {
        /* SceneAvatarInfo avatar = 10; */
        if (message.entity.oneofKind === "avatar")
            SceneAvatarInfo_1.SceneAvatarInfo.internalBinaryWrite(message.entity.avatar, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneMonsterInfo monster = 11; */
        if (message.entity.oneofKind === "monster")
            SceneMonsterInfo_1.SceneMonsterInfo.internalBinaryWrite(message.entity.monster, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneNpcInfo npc = 12; */
        if (message.entity.oneofKind === "npc")
            SceneNpcInfo_1.SceneNpcInfo.internalBinaryWrite(message.entity.npc, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneGadgetInfo gadget = 13; */
        if (message.entity.oneofKind === "gadget")
            SceneGadgetInfo_1.SceneGadgetInfo.internalBinaryWrite(message.entity.gadget, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ProtEntityType entity_type = 1; */
        if (message.entityType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.entityType);
        /* uint32 entity_id = 2; */
        if (message.entityId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.entityId);
        /* string name = 3; */
        if (message.name !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.name);
        /* MotionInfo motion_info = 4; */
        if (message.motionInfo)
            MotionInfo_1.MotionInfo.internalBinaryWrite(message.motionInfo, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated PropPair prop_list = 5; */
        for (let i = 0; i < message.propList.length; i++)
            PropPair_1.PropPair.internalBinaryWrite(message.propList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated FightPropPair fight_prop_list = 6; */
        for (let i = 0; i < message.fightPropList.length; i++)
            FightPropPair_1.FightPropPair.internalBinaryWrite(message.fightPropList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 life_state = 7; */
        if (message.lifeState !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.lifeState);
        /* repeated AnimatorParameterValueInfoPair animator_para_list = 9; */
        for (let i = 0; i < message.animatorParaList.length; i++)
            AnimatorParameterValueInfoPair_1.AnimatorParameterValueInfoPair.internalBinaryWrite(message.animatorParaList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 last_move_scene_time_ms = 17; */
        if (message.lastMoveSceneTimeMs !== 0)
            writer.tag(17, runtime_1.WireType.Varint).uint32(message.lastMoveSceneTimeMs);
        /* uint32 last_move_reliable_seq = 18; */
        if (message.lastMoveReliableSeq !== 0)
            writer.tag(18, runtime_1.WireType.Varint).uint32(message.lastMoveReliableSeq);
        /* EntityClientData entity_client_data = 19; */
        if (message.entityClientData)
            EntityClientData_1.EntityClientData.internalBinaryWrite(message.entityClientData, writer.tag(19, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated EntityEnvironmentInfo entity_environment_info_list = 20; */
        for (let i = 0; i < message.entityEnvironmentInfoList.length; i++)
            EntityEnvironmentInfo_1.EntityEnvironmentInfo.internalBinaryWrite(message.entityEnvironmentInfoList[i], writer.tag(20, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* EntityAuthorityInfo entity_authority_info = 21; */
        if (message.entityAuthorityInfo)
            EntityAuthorityInfo_1.EntityAuthorityInfo.internalBinaryWrite(message.entityAuthorityInfo, writer.tag(21, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated string tag_list = 22; */
        for (let i = 0; i < message.tagList.length; i++)
            writer.tag(22, runtime_1.WireType.LengthDelimited).string(message.tagList[i]);
        /* repeated ServerBuff server_buff_list = 23; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            ServerBuff_1.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(23, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneEntityInfo
 */
exports.SceneEntityInfo = new SceneEntityInfo$Type();
