---
source_path: "documentation/AVFoundation/avassettrack-async-properties.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassettrack-async-properties"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassettrack:0000:0001">AVAssetTrack</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassettrack:0001:0001">**Framework**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassettrack:0002:0001">Asynchronous properties for asset tracks.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:loading-track-information:0004:0001">Loading track information</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-track-information:0005:0001"><a href="avpartialasyncproperty/totalsampledatalength.md">static var totalSampleDataLength: AVAsyncProperty&lt;Root, Int64&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-track-information:0006:0001">The total number of bytes of sample data the track requires.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-track-information:0007:0001">[static var formatDescriptions: AVAsyncProperty&lt;Root, [CMFormatDescription]&gt;](avpartialasyncproperty/formatdescriptions.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-track-information:0008:0001">The format descriptions of the media samples that a track references.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-track-information:0009:0001"><a href="avpartialasyncproperty/isdecodable.md">static var isDecodable: AVAsyncProperty&lt;Root, Bool&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-track-information:0010:0001">A Boolean value that indicates whether the track is decodable in the current environment.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-track-information:0011:0001"><a href="avpartialasyncproperty/isenabled.md">static var isEnabled: AVAsyncProperty&lt;Root, Bool&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-track-information:0012:0001">A Boolean value that indicates whether the track is in an enabled state.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-track-information:0013:0001"><a href="avpartialasyncproperty/isplayable-6txa5.md">static var isPlayable: AVAsyncProperty&lt;Root, Bool&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-track-information:0014:0001">A Boolean value that indicates whether the track is playable in the current environment.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-track-information:0015:0001">[static var mediaCharacteristics: AVAsyncProperty&lt;Root, [AVMediaCharacteristic]&gt;](avpartialasyncproperty/mediacharacteristics.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-track-information:0016:0001">The media characteristics for the track.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-track-information:0017:0001"><a href="avpartialasyncproperty/isselfcontained.md">static var isSelfContained: AVAsyncProperty&lt;Root, Bool&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-track-information:0018:0001">A Boolean value that indicates whether the track references sample data only within its container file.</span>

### <span class="ko-segment" data-segment-id="seg:heading:loading-temporal-information:0019:0001">Loading temporal information</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-temporal-information:0020:0001"><a href="avpartialasyncproperty/timerange.md">static var timeRange: AVAsyncProperty&lt;Root, CMTimeRange&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-temporal-information:0021:0001">The time range of the track within the overall timeline of the asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-temporal-information:0022:0001"><a href="avpartialasyncproperty/naturaltimescale.md">static var naturalTimeScale: AVAsyncProperty&lt;Root, CMTimeScale&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-temporal-information:0023:0001">The natural time scale of the media that a track references.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-temporal-information:0024:0001"><a href="avpartialasyncproperty/estimateddatarate.md">static var estimatedDataRate: AVAsyncProperty&lt;Root, Float&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-temporal-information:0025:0001">The estimated data rate, in bits per second, of the media that the track references.</span>

### <span class="ko-segment" data-segment-id="seg:heading:loading-language-support:0026:0001">Loading language support</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-language-support:0027:0001"><a href="avpartialasyncproperty/languagecode.md">static var languageCode: AVAsyncProperty&lt;Root, String?&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-language-support:0028:0001">The language code of the track.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-language-support:0029:0001"><a href="avpartialasyncproperty/extendedlanguagetag.md">static var extendedLanguageTag: AVAsyncProperty&lt;Root, String?&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-language-support:0030:0001">The language tag of the track.</span>

### <span class="ko-segment" data-segment-id="seg:heading:loading-visual-characteristics:0031:0001">Loading visual characteristics</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-visual-characteristics:0032:0001"><a href="avpartialasyncproperty/naturalsize.md">static var naturalSize: AVAsyncProperty&lt;Root, CGSize&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-visual-characteristics:0033:0001">The natural dimensions of the media data that the track references.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-visual-characteristics:0034:0001"><a href="avpartialasyncproperty/preferredtransform-90jdn.md">static var preferredTransform: AVAsyncProperty&lt;Root, CGAffineTransform&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-visual-characteristics:0035:0001">The track’s transform preference to apply to its visual content during presentation or processing.</span>

### <span class="ko-segment" data-segment-id="seg:heading:loading-audible-characteristics:0036:0001">Loading audible characteristics</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-audible-characteristics:0037:0001"><a href="avpartialasyncproperty/preferredvolume-8q2yt.md">static var preferredVolume: AVAsyncProperty&lt;Root, Float&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-audible-characteristics:0038:0001">The track’s volume preference for playing its audible media.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-audible-characteristics:0039:0001"><a href="avpartialasyncproperty/hasaudiosampledependencies.md">static var hasAudioSampleDependencies: AVAsyncProperty&lt;Root, Bool&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-audible-characteristics:0040:0001">트랙이 샘플 종속성을 갖는지 나타내는 Boolean 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:loading-frame-based-characteristics:0041:0001">프레임 기반 특성 로드</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-frame-based-characteristics:0042:0001"><a href="avpartialasyncproperty/nominalframerate.md">static var nominalFrameRate: AVAsyncProperty&lt;Root, Float&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-frame-based-characteristics:0043:0001">트랙의 초당 프레임 수(프레임 속도)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-frame-based-characteristics:0044:0001"><a href="avpartialasyncproperty/minframeduration.md">static var minFrameDuration: AVAsyncProperty&lt;Root, CMTime&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-frame-based-characteristics:0045:0001">트랙 프레임의 최소 지속 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-frame-based-characteristics:0046:0001"><a href="avpartialasyncproperty/requiresframereordering.md">static var requiresFrameReordering: AVAsyncProperty&lt;Root, Bool&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-frame-based-characteristics:0047:0001">트랙의 샘플이 표시 타임스탬프와 디코드 타임스탬프가 다를 수 있는지 나타내는 Boolean 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:loading-metadata:0048:0001">메타데이터 로드</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-metadata:0049:0001">[static var metadata: AVAsyncProperty&lt;Root, [AVMetadataItem]&gt;](avpartialasyncproperty/metadata-6e14c.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-metadata:0050:0001">값이 있는 모든 메타데이터 식별자의 메타데이터 항목 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-metadata:0051:0001">[static var availableMetadataFormats: AVAsyncProperty&lt;Root, [AVMetadataFormat]&gt;](avpartialasyncproperty/availablemetadataformats-5p9xg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-metadata:0052:0001">트랙에서 사용할 수 있는 메타데이터 형식의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-metadata:0053:0001">[static var commonMetadata: AVAsyncProperty&lt;Root, [AVMetadataItem]&gt;](avpartialasyncproperty/commonmetadata-73m58.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-metadata:0054:0001">값이 있는 모든 공통 메타데이터 키의 메타데이터 항목 배열입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:loading-track-segments:0055:0001">트랙 세그먼트 로드</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-track-segments:0056:0001">[static var segments: AVAsyncProperty&lt;Root, [AVAssetTrackSegment]&gt;](avpartialasyncproperty/segments.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-track-segments:0057:0001">트랙의 미디어 샘플과 타임라인 간 시간 매핑입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:loading-track-associations:0058:0001">트랙 연결 관계 로드</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-track-associations:0059:0001">[static var availableTrackAssociationTypes: AVAsyncProperty&lt;Root, [AVAssetTrack.AssociationType]&gt;](avpartialasyncproperty/availabletrackassociationtypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-track-associations:0060:0001">트랙이 다른 트랙과 연결할 때 사용하는 연결 유형의 배열입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-sample-cursors:0061:0001">샘플 커서 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-sample-cursors:0062:0001"><a href="avpartialasyncproperty/canprovidesamplecursors.md">static var canProvideSampleCursors: AVAsyncProperty&lt;Root, Bool&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-sample-cursors:0063:0001">트랙의 미디어 샘플을 순회하고 정보를 검색할 수 있도록 샘플 커서 인스턴스를 제공할 수 있는지 나타내는 Boolean 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0064:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0065:0001"><a href="avasset-async-properties.md">AVAsset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0066:0001">에셋에 대한 비동기 속성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0067:0001"><a href="avurlasset-async-properties.md">AVURLAsset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0068:0001">URL 에셋에 대한 비동기 속성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0069:0001"><a href="avfragmentedasset-async-properties.md">AVFragmentedAsset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0070:0001">조각화 에셋에 대한 비동기 속성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0071:0001"><a href="avmetadataitem-async-properties.md">AVMetadataItem</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0072:0001">메타데이터 항목에 대한 비동기 속성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0073:0001"><a href="avcomposition-async-properties.md">AVComposition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0074:0001">컴포지션에 대한 비동기 속성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0075:0001"><a href="avmutablecomposition-async-properties.md">AVMutableComposition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0076:0001">가변 컴포지션에 대한 비동기 속성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0077:0001"><a href="avmovie-async-properties.md">AVMovie</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0078:0001">동영상에 대한 비동기 속성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0079:0001"><a href="avmutablemovie-async-properties.md">AVMutableMovie</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0080:0001">가변 동영상에 대한 비동기 속성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0081:0001"><a href="avfragmentedmovie-async-properties.md">AVFragmentedMovie</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0082:0001">분할 동영상에 대한 비동기 속성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0084:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassettrack-async-properties">View on Apple Developer</a>*</span>
