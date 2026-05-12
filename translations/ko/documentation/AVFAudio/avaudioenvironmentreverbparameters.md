---
source_path: "documentation/AVFAudio/avaudioenvironmentreverbparameters.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioenvironmentreverbparameters"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudioenvironmentreverbparameters:0000:0001">AVAudioEnvironmentReverbParameters</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioenvironmentreverbparameters:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioenvironmentreverbparameters:0002:0001">environment node 클래스의 리버브를 제어하는 데 사용하는 매개변수를 캡슐화하는 클래스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioenvironmentreverbparameters:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentreverbparameters:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentreverbparameters:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentreverbparameters:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentreverbparameters:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentreverbparameters:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentreverbparameters:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentreverbparameters:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAudioEnvironmentReverbParameters
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">리버브를 사용하여 환경의 음향 특성을 시뮬레이션합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002"><a href="avaudioenvironmentnode.md">@@TOKEN_0@@</a> 클래스에는 청취자가 있는 공간을 나타내는 내장 리버브가 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">리버브에는 체인의 끝에 위치한 단일 필터가 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">이 필터를 사용해 리버브의 전체 음향을 조정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0003">예를 들어 리버브 프리셋 중 하나를 선택해 전체 공간을 시뮬레이션한 다음, 이 필터를 사용해 전체 음향을 밝게 하거나 어둡게 할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001"><a href="avaudioenvironmentreverbparameters.md">@@TOKEN_0@@</a>의 독립 인스턴스를 생성할 수 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">유효한 인스턴스는 source 객체에서 제공되는 인스턴스만 허용되며, 예를 들어 <a href="avaudioenvironmentnode.md">@@TOKEN_0@@</a> 인스턴스가 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0011:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:enabling-and-disabling-reverb:0012:0001">리버브 활성화 및 비활성화</span>

- <span class="ko-segment" data-segment-id="seg:list:enabling-and-disabling-reverb:0013:0001"><a href="avaudioenvironmentreverbparameters/enable.md">var enable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enabling-and-disabling-reverb:0014:0001">리버브가 활성 상태인지 나타내는 Boolean 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-and-setting-reverb-values:0015:0001">리버브 값 가져오기 및 설정</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-and-setting-reverb-values:0016:0001"><a href="avaudioenvironmentreverbparameters/level.md">var level: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-and-setting-reverb-values:0017:0001">데시벨 단위로 리버브의 양을 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-and-setting-reverb-values:0018:0001"><a href="avaudioenvironmentreverbparameters/filterparameters.md">var filterParameters: AVAudioUnitEQFilterParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-and-setting-reverb-values:0019:0001">시스템이 출력에 적용하는 필터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-and-setting-reverb-values:0020:0001"><a href="avaudioenvironmentreverbparameters/loadfactoryreverbpreset(_:">func loadFactoryReverbPreset(AVAudioUnitReverbPreset)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-and-setting-reverb-values:0021:0001">리버브 factory preset 중 하나를 로드합니다.</span>

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

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudioenvironmentnode.md">class AVAudioEnvironmentNode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">3D 오디오 환경을 시뮬레이션하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avaudioenvironmentdistanceattenuationparameters.md">class AVAudioEnvironmentDistanceAttenuationParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">감쇠 거리량, 오디오 강도의 점진적 손실 및 기타 특성을 지정하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avaudio3dmixing.md">protocol AVAudio3DMixing</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">3D 믹싱 속성을 정의하는 속성 모음입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avaudio3dpoint.md">struct AVAudio3DPoint</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">3D 공간의 한 점을 나타내는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avaudio3dvectororientation.md">struct AVAudio3DVectorOrientation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">3D 공간에서 청취자 방향을 나타내는 두 개의 직교 벡터를 표현하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="avaudio3dangularorientation.md">struct AVAudio3DAngularOrientation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">3D 공간에서 청취자의 각도 방향을 나타내는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="avaudio3dmixingsourcemode.md">enum AVAudio3DMixingSourceMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">오디오 환경 노드의 입력 버스에 대한 소스 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="avaudio3dmixingrenderingalgorithm.md">enum AVAudio3DMixingRenderingAlgorithm</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">환경 노드 입력 버스별로 사용할 수 있는 렌더링 알고리즘 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="avaudioenvironmentoutputtype.md">enum AVAudioEnvironmentOutputType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">자동 3D 믹싱 렌더링 알고리즘과 함께 사용하는 출력 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="avaudio3dmixingpointsourceinheadmode.md">enum AVAudio3DMixingPointSourceInHeadMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">점 소스의 in-head 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="avaudio3dvector.md">typealias AVAudio3DVector</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">3D 공간의 벡터를 각도로 나타내는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioenvironmentreverbparameters">View on Apple Developer</a>*</span>
