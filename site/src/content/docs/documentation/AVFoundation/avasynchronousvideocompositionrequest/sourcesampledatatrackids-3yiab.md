---
source_path: "documentation/AVFoundation/avasynchronousvideocompositionrequest/sourcesampledatatrackids-3yiab.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/sourcesampledatatrackids-3yiab"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sourcesampledatatrackids:0000:0001">sourceSampleDataTrackIDs</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcesampledatatrackids:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcesampledatatrackids:0002:0001">소스 샘플 데이터를 포함하는 트랙의 식별자입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcesampledatatrackids:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sourcesampledatatrackids:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcesampledatatrackids:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcesampledatatrackids:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcesampledatatrackids:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcesampledatatrackids:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcesampledatatrackids:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@nonobjc
var sourceSampleDataTrackIDs: [CMPersistentTrackID] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">샘플 데이터 트랙의 미디어 유형은 <a href="https://developer.apple.com/documentation/CoreMedia/kCMMediaType_Metadata">@@TOKEN_0@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avasynchronousvideocompositionrequest/attach(_:to:">func attach(AVSpatialVideoConfiguration, to: inout CVMutablePixelBuffer) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">픽셀 버퍼를 지정한 공간 구성과 연결합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avasynchronousvideocompositionrequest/sourceframe(bytrackid:">func sourceFrame(byTrackID: CMPersistentTrackID) -&gt; CVPixelBuffer?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 식별자를 포함한 트랙의 소스 픽셀 버퍼를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avasynchronousvideocompositionrequest/sourcereadonlypixelbuffer(bytrackid:">func sourceReadOnlyPixelBuffer(byTrackID: CMPersistentTrackID) -&gt; CVReadOnlyPixelBuffer?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 트랙 ID의 소스 CVReadOnlyPixelBuffer를 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0002">트랙에 태그된 버퍼가 포함되어 있으면 태그된 버퍼 중 하나의 픽셀 버퍼가 반환됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avasynchronousvideocompositionrequest/sourcereadysamplebuffer(bytrackid:">func sourceReadySampleBuffer(byTrackID: CMPersistentTrackID) -&gt; CMReadySampleBuffer&lt;CMSampleBuffer.DynamicContent&gt;?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정된 트랙 ID에 대한 소스 CMReadySampleBuffer를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avasynchronousvideocompositionrequest/sourcesamplebuffer(bytrackid:">func sourceSampleBuffer(byTrackID: CMPersistentTrackID) -&gt; CMSampleBuffer?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정된 식별자를 포함한 트랙의 소스 샘플 버퍼를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[func sourceTaggedDynamicBuffers(byTrackID: CMPersistentTrackID) -&gt; [CMTaggedDynamicBuffer]?](avasynchronousvideocompositionrequest/sourcetaggeddynamicbuffers(bytrackid:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 트랙 ID의 소스 태그 동적 버퍼를 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0002">비디오 트랙에 태그된 버퍼가 없거나 트랙에 비디오가 포함되지 않으면 nil을 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0003">이 함수는 supportsSourceTaggedBuffers가 YES일 때만 호출해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avasynchronousvideocompositionrequest/sourcetimedmetadata(bytrackid:">func sourceTimedMetadata(byTrackID: CMPersistentTrackID) -&gt; AVTimedMetadataGroup?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">지정된 식별자를 포함한 트랙의 소스 timed metadata group을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[var sourceTrackIDs: [NSNumber]](avasynchronousvideocompositionrequest/sourcetrackids.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">소스 비디오를 포함하는 트랙의 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/sourcesampledatatrackids-3yiab">View on Apple Developer</a>*</span>
