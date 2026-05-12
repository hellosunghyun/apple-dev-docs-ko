---
source_path: "documentation/AVFoundation/avassetreaderaudiomixoutput.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetreaderaudiomixoutput:0000:0001">AVAssetReaderAudioMixOutput</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetreaderaudiomixoutput:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetreaderaudiomixoutput:0002:0001">하나 이상의 트랙에서 믹싱한 결과 오디오 샘플을 읽는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetreaderaudiomixoutput:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetreaderaudiomixoutput:0004:0001">iOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderaudiomixoutput:0004:0002">iPadOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderaudiomixoutput:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderaudiomixoutput:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderaudiomixoutput:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderaudiomixoutput:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAssetReaderAudioMixOutput
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">자산 리더에 오디오 믹스 출력을 추가해 하나 이상의 자산 트랙을 믹싱한 오디오 데이터를 읽습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">샘플을 저장된 형식으로 읽거나 대체 형식으로 변환해 읽을 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-audio-mix-output:0010:0001">오디오 믹스 출력 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-audio-mix-output:0011:0001">[init(audioTracks: [AVAssetTrack], audioSettings: [String : Any]?)](avassetreaderaudiomixoutput/init(audiotracks:audiosettings:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-audio-mix-output:0012:0001">지정된 오디오 트랙에서 믹싱된 오디오를 읽는 객체를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-audio-settings:0013:0001">오디오 설정 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-audio-settings:0014:0001"><a href="avassetreaderaudiomixoutput/audiomix.md">var audioMix: AVAudioMix?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-audio-settings:0015:0001">이 출력에서 사용할 오디오 믹스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-audio-settings:0016:0001"><a href="avassetreaderaudiomixoutput/audiotimepitchalgorithm.md">var audioTimePitchAlgorithm: AVAudioTimePitchAlgorithm</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-audio-settings:0017:0001">크기 조정된 오디오 편집에 사용할 처리 알고리즘입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-an-output:0018:0001">출력 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-an-output:0019:0001">[var audioTracks: [AVAssetTrack]](avassetreaderaudiomixoutput/audiotracks.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-an-output:0020:0001">출력이 오디오를 읽는 트랙입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-an-output:0021:0001">[var audioSettings: [String : Any]?](avassetreaderaudiomixoutput/audiosettings.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-an-output:0022:0001">출력이 사용하는 오디오 설정입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0023:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0024:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0025:0001"><a href="avassetreaderoutput.md">AVAssetReaderOutput</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0026:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0027:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0028:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="reading-multiview-3d-video-files.md">Reading multiview 3D video files</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">멀티뷰 High Efficiency Video Coding 형식 파일에서 개별 비디오 프레임을 읽어 좌안과 우안용 단일 이미지를 렌더링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avassetreader.md">class AVAssetReader</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">에셋에서 미디어 데이터를 읽는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="avassetreaderoutput.md">class AVAssetReaderOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">에셋 리더에서 미디어 샘플을 읽기 위한 인터페이스를 정의하는 추상 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="avassetreadertrackoutput.md">class AVAssetReaderTrackOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">에셋의 단일 트랙에서 미디어 데이터를 읽는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="avassetreadervideocompositionoutput.md">class AVAssetReaderVideoCompositionOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">An object that reads composited video frames from one or more tracks of an asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="avassetreadersamplereferenceoutput.md">class AVAssetReaderSampleReferenceOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">An object that reads sample references from an asset track.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="avassetreaderoutputmetadataadaptor.md">class AVAssetReaderOutputMetadataAdaptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">An object that creates timed metadata group objects for an asset track.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput">View on Apple Developer</a>*</span>
