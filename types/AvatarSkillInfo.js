"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarSkillInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarSkillInfo", [
            { no: 1, name: "pass_cd_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "full_cd_time_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "max_charge_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { passCdTime: 0, fullCdTimeList: [], maxChargeCount: 0 };
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
                case /* uint32 pass_cd_time */ 1:
                    message.passCdTime = reader.uint32();
                    break;
                case /* repeated uint32 full_cd_time_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fullCdTimeList.push(reader.uint32());
                    else
                        message.fullCdTimeList.push(reader.uint32());
                    break;
                case /* uint32 max_charge_count */ 3:
                    message.maxChargeCount = reader.uint32();
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
    internalBinaryWrite(message, writer, options) {
        /* uint32 pass_cd_time = 1; */
        if (message.passCdTime !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.passCdTime);
        /* repeated uint32 full_cd_time_list = 2; */
        if (message.fullCdTimeList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fullCdTimeList.length; i++)
                writer.uint32(message.fullCdTimeList[i]);
            writer.join();
        }
        /* uint32 max_charge_count = 3; */
        if (message.maxChargeCount !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.maxChargeCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarSkillInfo
 */
exports.AvatarSkillInfo = new AvatarSkillInfo$Type();
