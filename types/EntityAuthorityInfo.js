"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityAuthorityInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AnimatorParameterValueInfoPair_1 = require("./AnimatorParameterValueInfoPair");
const Vector_1 = require("./Vector");
const SceneEntityAiInfo_1 = require("./SceneEntityAiInfo");
const EntityRendererChangedInfo_1 = require("./EntityRendererChangedInfo");
const AbilitySyncStateInfo_1 = require("./AbilitySyncStateInfo");
// @generated message type with reflection information, may provide speed optimized methods
class EntityAuthorityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EntityAuthorityInfo", [
            { no: 1, name: "ability_info", kind: "message", T: () => AbilitySyncStateInfo_1.AbilitySyncStateInfo },
            { no: 2, name: "renderer_changed_info", kind: "message", T: () => EntityRendererChangedInfo_1.EntityRendererChangedInfo },
            { no: 3, name: "ai_info", kind: "message", T: () => SceneEntityAiInfo_1.SceneEntityAiInfo },
            { no: 4, name: "born_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "pose_para_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AnimatorParameterValueInfoPair_1.AnimatorParameterValueInfoPair }
        ]);
    }
    create(value) {
        const message = { poseParaList: [] };
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
                case /* AbilitySyncStateInfo ability_info */ 1:
                    message.abilityInfo = AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.abilityInfo);
                    break;
                case /* EntityRendererChangedInfo renderer_changed_info */ 2:
                    message.rendererChangedInfo = EntityRendererChangedInfo_1.EntityRendererChangedInfo.internalBinaryRead(reader, reader.uint32(), options, message.rendererChangedInfo);
                    break;
                case /* SceneEntityAiInfo ai_info */ 3:
                    message.aiInfo = SceneEntityAiInfo_1.SceneEntityAiInfo.internalBinaryRead(reader, reader.uint32(), options, message.aiInfo);
                    break;
                case /* Vector born_pos */ 4:
                    message.bornPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.bornPos);
                    break;
                case /* repeated AnimatorParameterValueInfoPair pose_para_list */ 5:
                    message.poseParaList.push(AnimatorParameterValueInfoPair_1.AnimatorParameterValueInfoPair.internalBinaryRead(reader, reader.uint32(), options));
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
        /* AbilitySyncStateInfo ability_info = 1; */
        if (message.abilityInfo)
            AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryWrite(message.abilityInfo, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* EntityRendererChangedInfo renderer_changed_info = 2; */
        if (message.rendererChangedInfo)
            EntityRendererChangedInfo_1.EntityRendererChangedInfo.internalBinaryWrite(message.rendererChangedInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneEntityAiInfo ai_info = 3; */
        if (message.aiInfo)
            SceneEntityAiInfo_1.SceneEntityAiInfo.internalBinaryWrite(message.aiInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector born_pos = 4; */
        if (message.bornPos)
            Vector_1.Vector.internalBinaryWrite(message.bornPos, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated AnimatorParameterValueInfoPair pose_para_list = 5; */
        for (let i = 0; i < message.poseParaList.length; i++)
            AnimatorParameterValueInfoPair_1.AnimatorParameterValueInfoPair.internalBinaryWrite(message.poseParaList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityAuthorityInfo
 */
exports.EntityAuthorityInfo = new EntityAuthorityInfo$Type();
