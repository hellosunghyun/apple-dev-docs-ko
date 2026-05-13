---
source_path: "documentation/Accelerate/bnnsimagestackdescriptor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsimagestackdescriptor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsimagestackdescriptor:0000:0001">BNNSImageStackDescriptor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsimagestackdescriptor:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsimagestackdescriptor:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsimagestackdescriptor:0003:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsimagestackdescriptor:0003:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsimagestackdescriptor:0003:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsimagestackdescriptor:0003:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsimagestackdescriptor:0003:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsimagestackdescriptor:0003:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsimagestackdescriptor:0003:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
struct BNNSImageStackDescriptor
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0006:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">이미지 스택 디스크립터(DEPRECATED, BNNSNDArrayDescriptor 사용)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이미지 스택은 너비와 높이가 동일한 이미지를 순서대로 나열한 시퀀스입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">시퀀스의 각 이미지는 채널이라고 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">예를 들어 RGB 이미지는 세 개의 개별 채널로 저장됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0004">픽셀은 하나의 스칼라 값만 가지며 <code>data_type</code>에서 설명한 형식을 사용해 저장됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">채널 c에서 위치 (x,y)에 있는 픽셀 P(c,x,y)는 data[x + row_stride * y + image_stride * c]에 저장되며, x=0..width-1, y=0..height-1, c=0..channels-1이다. row_stride ≥ width, image_stride ≥ row_stride * height.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">정수형은 <code>float Y = DATA_SCALE * (float)X + DATA_BIAS</code>를 사용해 부동소수점으로 변환되며, <code>Int X = convert_and_saturate(Y / DATA_SCALE - DATA_BIAS)</code>를 사용해 정수형으로 다시 변환됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0011:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0012:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0013:0001"><a href="bnnsimagestackdescriptor/init.md">init()</a></span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0013:0002"><a href="bnnsimagestackdescriptor/init(width:height:channels:row_stride:image_stride:data_type:">init(width: Int, height: Int, channels: Int, row_stride: Int, image_stride: Int, data_type: BNNSDataType)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0013:0003"><a href="bnnsimagestackdescriptor/init(width:height:channels:row_stride:image_stride:data_type:data_scale:data_bias:">init(width: Int, height: Int, channels: Int, row_stride: Int, image_stride: Int, data_type: BNNSDataType, data_scale: Float, data_bias: Float)</a>.md)</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0014:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0001"><a href="bnnsimagestackdescriptor/channels.md">var channels: Int</a></span>
- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0002"><a href="bnnsimagestackdescriptor/data_bias.md">var data_bias: Float</a></span>
- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0003"><a href="bnnsimagestackdescriptor/data_scale.md">var data_scale: Float</a></span>
- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0004"><a href="bnnsimagestackdescriptor/data_type.md">var data_type: BNNSDataType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0005"><a href="bnnsimagestackdescriptor/height.md">var height: Int</a></span>
- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0006"><a href="bnnsimagestackdescriptor/image_stride.md">var image_stride: Int</a></span>
- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0007"><a href="bnnsimagestackdescriptor/row_stride.md">var row_stride: Int</a></span>
- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0015:0008"><a href="bnnsimagestackdescriptor/width.md">var width: Int</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0016:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0017:0001">준수 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0002"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsdatatype.md">struct BNNSDataType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">BNNS 데이터 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnssparsityparameters.md">struct BNNSSparsityParameters</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0002"><a href="bnnssparsitytype.md">struct BNNSSparsityType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0003"><a href="bnnstargetsystem.md">struct BNNSTargetSystem</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0004"><a href="bnns_graph_argument_t.md">struct bnns_graph_argument_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">입력 또는 출력 인수와 관련된 데이터를 설명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsvectordescriptor.md">struct BNNSVectorDescriptor</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsimagestackdescriptor">View on Apple Developer</a>*</span>
