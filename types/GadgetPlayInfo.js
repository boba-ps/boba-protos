"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetPlayInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GadgetCrucibleInfo_1 = require("./GadgetCrucibleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GadgetPlayInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GadgetPlayInfo", [
            { no: 21, name: "crucible_info", kind: "message", oneof: "playInfo", T: () => GadgetCrucibleInfo_1.GadgetCrucibleInfo },
            { no: 1, name: "play_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "duration", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "progress_stage_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "start_cd", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { playInfo: { oneofKind: undefined }, playType: 0, duration: 0, progressStageList: [], startCd: 0, startTime: 0, progress: 0 };
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
                case /* GadgetCrucibleInfo crucible_info */ 21:
                    message.playInfo = {
                        oneofKind: "crucibleInfo",
                        crucibleInfo: GadgetCrucibleInfo_1.GadgetCrucibleInfo.internalBinaryRead(reader, reader.uint32(), options, message.playInfo.crucibleInfo)
                    };
                    break;
                case /* uint32 play_type */ 1:
                    message.playType = reader.uint32();
                    break;
                case /* uint32 duration */ 2:
                    message.duration = reader.uint32();
                    break;
                case /* repeated uint32 progress_stage_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.progressStageList.push(reader.uint32());
                    else
                        message.progressStageList.push(reader.uint32());
                    break;
                case /* uint32 start_cd */ 4:
                    message.startCd = reader.uint32();
                    break;
                case /* uint32 start_time */ 5:
                    message.startTime = reader.uint32();
                    break;
                case /* uint32 progress */ 6:
                    message.progress = reader.uint32();
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
        /* GadgetCrucibleInfo crucible_info = 21; */
        if (message.playInfo.oneofKind === "crucibleInfo")
            GadgetCrucibleInfo_1.GadgetCrucibleInfo.internalBinaryWrite(message.playInfo.crucibleInfo, writer.tag(21, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 play_type = 1; */
        if (message.playType !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.playType);
        /* uint32 duration = 2; */
        if (message.duration !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.duration);
        /* repeated uint32 progress_stage_list = 3; */
        if (message.progressStageList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.progressStageList.length; i++)
                writer.uint32(message.progressStageList[i]);
            writer.join();
        }
        /* uint32 start_cd = 4; */
        if (message.startCd !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.startCd);
        /* uint32 start_time = 5; */
        if (message.startTime !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.startTime);
        /* uint32 progress = 6; */
        if (message.progress !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.progress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetPlayInfo
 */
exports.GadgetPlayInfo = new GadgetPlayInfo$Type();
