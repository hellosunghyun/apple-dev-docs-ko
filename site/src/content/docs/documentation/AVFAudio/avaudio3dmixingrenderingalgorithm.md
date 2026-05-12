---
source_path: "documentation/AVFAudio/avaudio3dmixingrenderingalgorithm.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudio3dmixingrenderingalgorithm"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudio3dmixingrenderingalgorithm:0000:0001">AVAudio3DMixingRenderingAlgorithm</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudio3dmixingrenderingalgorithm:0001:0001">**Framework**: AVFAudio **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudio3dmixingrenderingalgorithm:0002:0001">environment node의 입력 버스마다 사용 가능한 렌더링 알고리즘 유형입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudio3dmixingrenderingalgorithm:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithm:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithm:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithm:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithm:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithm:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithm:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithm:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum AVAudio3DMixingRenderingAlgorithm
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">렌더링 알고리즘은 품질과 CPU 비용에서 서로 다릅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002"><a href="avaudio3dmixingrenderingalgorithm/equalpowerpanning.md">@@TOKEN_0@@</a>는 가장 단순한 패닝 알고리즘이며 계산 비용이 가장 낮습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">멀티채널 하드웨어로 렌더링할 때 대부분의 렌더링 알고리즘은 채널 1과 2만 렌더링하며 <a href="avaudio3dmixingrenderingalgorithm/soundfield.md">@@TOKEN_0@@</a>와 <a href="avaudio3dmixingrenderingalgorithm/auto.md">@@TOKEN_1@@</a>는 제외됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:rendering-algorithms:0011:0001">렌더링 알고리즘</span>

- <span class="ko-segment" data-segment-id="seg:list:rendering-algorithms:0012:0001"><a href="avaudio3dmixingrenderingalgorithm/auto.md">AVAudio3DMixingRenderingAlgorithm.auto</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendering-algorithms:0013:0001">현재 재생 하드웨어에서 사용 가능한 최고 품질의 렌더링 알고리즘을 자동으로 선택합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:rendering-algorithms:0014:0001"><a href="avaudio3dmixingrenderingalgorithm/equalpowerpanning.md">AVAudio3DMixingRenderingAlgorithm.equalPowerPanning</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendering-algorithms:0015:0001">믹서 버스의 데이터를 스테레오 필드로 패닝하는 알고리즘입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:rendering-algorithms:0016:0001"><a href="avaudio3dmixingrenderingalgorithm/hrtf.md">AVAudio3DMixingRenderingAlgorithm.HRTF</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendering-algorithms:0017:0001">헤드폰에서 필터링을 사용해 3D 공간을 모사하는 고품질 알고리즘입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:rendering-algorithms:0018:0001"><a href="avaudio3dmixingrenderingalgorithm/hrtfhq.md">AVAudio3DMixingRenderingAlgorithm.HRTFHQ</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendering-algorithms:0019:0001">더 높은 품질의 헤드-관련 전달 함수(HRTF) 렌더링 알고리즘입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:rendering-algorithms:0020:0001"><a href="avaudio3dmixingrenderingalgorithm/soundfield.md">AVAudio3DMixingRenderingAlgorithm.soundField</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendering-algorithms:0021:0001">멀티채널 하드웨어로 렌더링하는 알고리즘입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:rendering-algorithms:0022:0001"><a href="avaudio3dmixingrenderingalgorithm/sphericalhead.md">AVAudio3DMixingRenderingAlgorithm.sphericalHead</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendering-algorithms:0023:0001">양측 귀 간 시간 지연 및 기타 공간 단서를 시뮬레이션하여 헤드폰에서 3D 공간을 모사하는 알고리즘입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:rendering-algorithms:0024:0001"><a href="avaudio3dmixingrenderingalgorithm/stereopassthrough.md">AVAudio3DMixingRenderingAlgorithm.stereoPassThrough</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendering-algorithms:0025:0001">소스 데이터에 로컬라이징이 필요하지 않을 때 사용하는 알고리즘입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0026:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0027:0001"><a href="avaudio3dmixingrenderingalgorithm/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0028:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0029:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0031:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avaudioenvironmentnode.md">class AVAudioEnvironmentNode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">3D 오디오 환경을 시뮬레이션하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avaudioenvironmentdistanceattenuationparameters.md">class AVAudioEnvironmentDistanceAttenuationParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">감쇠 거리, 오디오 강도의 점진적 감소, 기타 특성을 지정하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avaudioenvironmentreverbparameters.md">class AVAudioEnvironmentReverbParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">environment node 클래스의 리버브를 제어하는 데 사용하는 매개변수를 캡슐화하는 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="avaudio3dmixing.md">protocol AVAudio3DMixing</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">3D 믹싱 속성을 정의하는 속성 모음입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="avaudio3dpoint.md">struct AVAudio3DPoint</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">3D 공간의 한 점을 나타내는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="avaudio3dvectororientation.md">struct AVAudio3DVectorOrientation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">3D 공간에서 청취자의 방향을 설명하는 두 개의 직교 벡터를 나타내는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="avaudio3dangularorientation.md">struct AVAudio3DAngularOrientation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">3D 공간에서 청취자의 각도 방향을 나타내는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="avaudio3dmixingsourcemode.md">enum AVAudio3DMixingSourceMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">오디오 환경 노드의 입력 버스에 대한 소스 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="avaudioenvironmentoutputtype.md">enum AVAudioEnvironmentOutputType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">자동 3D 믹싱 렌더링 알고리즘과 함께 사용되는 출력 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0050:0001"><a href="avaudio3dmixingpointsourceinheadmode.md">enum AVAudio3DMixingPointSourceInHeadMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">점 음원의 in-head 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0052:0001"><a href="avaudio3dvector.md">typealias AVAudio3DVector</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0053:0001">3D 공간의 벡터를 각도로 나타내는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0055:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudio3dmixingrenderingalgorithm">View on Apple Developer</a>*</span>
