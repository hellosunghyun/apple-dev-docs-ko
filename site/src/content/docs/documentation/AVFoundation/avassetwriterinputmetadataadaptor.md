---
source_path: "documentation/AVFoundation/avassetwriterinputmetadataadaptor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinputmetadataadaptor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetwriterinputmetadataadaptor:0000:0001">AVAssetWriterInputMetadataAdaptor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetwriterinputmetadataadaptor:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetwriterinputmetadataadaptor:0002:0001">자산 작성기 입력에 시간 기반 메타데이터 그룹을 추가하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetwriterinputmetadataadaptor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputmetadataadaptor:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputmetadataadaptor:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputmetadataadaptor:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputmetadataadaptor:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputmetadataadaptor:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputmetadataadaptor:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAssetWriterInputMetadataAdaptor
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">메타데이터 어댑터를 사용하여 <a href="avtimedmetadatagroup.md">@@TOKEN_0@@</a> 인스턴스로 패키지된 트랙 수준 메타데이터를 asset writer 입력에 추가합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-input-metadata-adaptor:0010:0001">입력 메타데이터 어댑터 만들기</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-input-metadata-adaptor:0011:0001"><a href="avassetwriterinputmetadataadaptor/init(assetwriterinput:">init(assetWriterInput: AVAssetWriterInput)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-input-metadata-adaptor:0012:0001">출력 파일에 쓰기 위해 시간 기반 메타데이터 그룹을 추가하는 메타데이터 그룹 어댑터를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:appending-timed-metadata:0013:0001">시간 기반 메타데이터 추가</span>

- <span class="ko-segment" data-segment-id="seg:list:appending-timed-metadata:0014:0001"><a href="avassetwriterinputmetadataadaptor/append(_:">func append(AVTimedMetadataGroup) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appending-timed-metadata:0015:0001">어댑터에 시간 기반 메타데이터 그룹을 추가합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-the-input:0016:0001">입력 액세스</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-the-input:0017:0001"><a href="avassetwriterinputmetadataadaptor/assetwriterinput.md">var assetWriterInput: AVAssetWriterInput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-the-input:0018:0001">메타데이터 어댑터의 입력입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0019:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0020:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0021:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0022:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0024:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="converting-projected-video-to-apple-projected-media-profile.md">Converting projected video to Apple Projected Media Profile</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">equirectangular 또는 half-equirectangular 투영 방식의 콘텐츠를 APMP로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="converting-side-by-side-3d-video-to-multiview-hevc-and-spatial-video.md">Converting side-by-side 3D video to multiview HEVC and spatial video</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">기존 3D HEVC 파일을 멀티뷰 HEVC 형식으로 변환하고, 필요에 따라 공간 메타데이터를 추가해 공간 비디오를 생성하여 visionOS용 비디오 콘텐츠를 만듭니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="adding-a-display-mask-rectangle-metadata-track-to-a-movie-file.md">Adding a display mask rectangle metadata track to a movie file</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">타임 기반 디스플레이 마스크 직사각형 메타데이터를 사용해 비디오의 특정 영역을 표시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="writing-fragmented-mpeg-4-files-for-http-live-streaming.md">Writing fragmented MPEG-4 files for HTTP Live Streaming</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">영화 파일을 단편화된 MPEG-4 파일 시퀀스로 변환하여 HTTP Live Streaming 프레젠테이션을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="../ImageIO/Creating-spatial-photos-and-videos-with-spatial-metadata.md">Creating spatial photos and videos with spatial metadata</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">Apple Vision Pro에서 시청할 공간 미디어를 만들기 위해 스테레오 사진과 비디오에 공간 메타데이터를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="tagging-media-with-video-color-information.md">Tagging media with video color information</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">미디어를 기록하고 트랜스코딩할 때 비디오 색상 공간 정보를 검사하고 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="evaluating-an-app-s-video-color.md">Evaluating an app’s video color</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">테스트 패턴, 비디오 테스트 장비, 조도 측정 장비를 사용하여 앱의 비디오 색상을 확인합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="avoutputsettingsassistant.md">class AVOutputSettingsAssistant</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">오디오 및 비디오 출력 설정 딕셔너리를 구성하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="avassetwriter.md">class AVAssetWriter</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">미디어 데이터를 컨테이너 파일에 기록하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="avassetwriterinput.md">class AVAssetWriterInput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">asset writer의 출력 파일에서 트랙에 미디어 샘플을 추가하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0045:0001"><a href="avassetwriterinputpixelbufferadaptor.md">class AVAssetWriterInputPixelBufferAdaptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">asset writer 입력에 비디오 샘플을 추가하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0047:0001"><a href="avassetwriterinputtaggedpixelbuffergroupadaptor.md">class AVAssetWriterInputTaggedPixelBufferGroupAdaptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0048:0001">asset writer 입력에 태그된 버퍼 그룹을 추가하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0049:0001"><a href="avassetwriterinputgroup.md">class AVAssetWriterInputGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0050:0001">재생 또는 처리 시 서로 배타적인 트랙을 가진 입력 그룹입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinputmetadataadaptor">View on Apple Developer</a>*</span>
