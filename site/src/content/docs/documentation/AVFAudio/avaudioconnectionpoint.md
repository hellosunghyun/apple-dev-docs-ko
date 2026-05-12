---
source_path: "documentation/AVFAudio/avaudioconnectionpoint.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioconnectionpoint"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudioconnectionpoint:0000:0001">AVAudioConnectionPoint</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioconnectionpoint:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioconnectionpoint:0002:0001">오디오 엔진에서 소스 또는 목적지 연결점의 표현 중 하나입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioconnectionpoint:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudioconnectionpoint:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconnectionpoint:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconnectionpoint:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconnectionpoint:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconnectionpoint:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconnectionpoint:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconnectionpoint:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAudioConnectionPoint
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 class의 인스턴스는 변경할 수 없습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-connection-point:0010:0001">연결점 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-connection-point:0011:0001"><a href="avaudioconnectionpoint/init(node:bus:">init(node: AVAudioNode, bus: AVAudioNodeBus)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-connection-point:0012:0001">연결점 객체를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-connection-point-properties:0013:0001">연결점 속성 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-connection-point-properties:0014:0001"><a href="avaudioengine/inputconnectionpoint(for:inputbus:">func inputConnectionPoint(for: AVAudioNode, inputBus: AVAudioNodeBus) -&gt; AVAudioConnectionPoint?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-connection-point-properties:0015:0001">노드의 입력 버스에 대한 연결 정보를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-connection-point-properties:0016:0001">[func outputConnectionPoints(for: AVAudioNode, outputBus: AVAudioNodeBus) -&gt; [AVAudioConnectionPoint]](avaudioengine/outputconnectionpoints(for:outputbus:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-connection-point-properties:0017:0001">노드의 출력 버스에 대한 연결 정보를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-connection-point-properties:0018:0001"><a href="avaudioconnectionpoint/bus.md">var bus: AVAudioNodeBus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-connection-point-properties:0019:0001">연결점의 버스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-connection-point-properties:0020:0001"><a href="avaudioconnectionpoint/node.md">var node: AVAudioNode?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-connection-point-properties:0021:0001">연결점의 노드입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0022:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0023:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0024:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0025:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0027:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[func connect(AVAudioNode, to: [AVAudioConnectionPoint], fromBus: AVAudioNodeBus, format: AVAudioFormat?)](avaudioengine/connect(_:to:frombus:format:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">소스 노드와 여러 대상 노드 간의 연결을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avaudioengine/inputconnectionpoint(for:inputbus:">func inputConnectionPoint(for: AVAudioNode, inputBus: AVAudioNodeBus) -&gt; AVAudioConnectionPoint?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">노드의 입력 버스에 대한 연결 정보를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[func outputConnectionPoints(for: AVAudioNode, outputBus: AVAudioNodeBus) -&gt; [AVAudioConnectionPoint]](avaudioengine/outputconnectionpoints(for:outputbus:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">노드의 출력 버스에 대한 연결 정보를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioconnectionpoint">View on Apple Developer</a>*</span>
