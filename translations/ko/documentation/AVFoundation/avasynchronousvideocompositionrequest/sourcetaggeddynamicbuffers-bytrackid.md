---
source_path: "documentation/AVFoundation/avasynchronousvideocompositionrequest/sourcetaggeddynamicbuffers-bytrackid.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/sourcetaggeddynamicbuffers-bytrackid"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sourcetaggeddynamicbuffersbytrackid:0000:0001">sourceTaggedDynamicBuffers(byTrackID:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcetaggeddynamicbuffersbytrackid:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcetaggeddynamicbuffersbytrackid:0002:0001">지정된 트랙 ID에 대한 소스 태그 동적 버퍼를 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:sourcetaggeddynamicbuffersbytrackid:0002:0002">비디오 트랙이 tagged buffers를 포함하지 않거나 트랙에 비디오가 없는 경우 nil을 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:sourcetaggeddynamicbuffersbytrackid:0002:0003">이 함수는 supportsSourceTaggedBuffers가 YES일 때만 호출해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcetaggeddynamicbuffersbytrackid:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sourcetaggeddynamicbuffersbytrackid:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcetaggeddynamicbuffersbytrackid:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcetaggeddynamicbuffersbytrackid:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcetaggeddynamicbuffersbytrackid:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcetaggeddynamicbuffersbytrackid:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcetaggeddynamicbuffersbytrackid:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sourceTaggedDynamicBuffers(byTrackID trackID: CMPersistentTrackID) -> [CMTaggedDynamicBuffer]?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정된 트랙 ID에 대한 소스 CMTaggedBuffer 배열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avasynchronousvideocompositionrequest/attach(_:to:">func attach(AVSpatialVideoConfiguration, to: inout CVMutablePixelBuffer) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">픽셀 버퍼를 지정된 spatial 구성에 연결합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avasynchronousvideocompositionrequest/sourceframe(bytrackid:">func sourceFrame(byTrackID: CMPersistentTrackID) -&gt; CVPixelBuffer?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 식별자가 포함된 트랙의 소스 픽셀 버퍼를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avasynchronousvideocompositionrequest/sourcereadonlypixelbuffer(bytrackid:">func sourceReadOnlyPixelBuffer(byTrackID: CMPersistentTrackID) -&gt; CVReadOnlyPixelBuffer?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 트랙 ID의 원본 CVReadOnlyPixelBuffer를 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0002">트랙에 태그가 지정된 버퍼가 포함된 경우 태그가 지정된 버퍼 중 하나의 픽셀 버퍼가 반환됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avasynchronousvideocompositionrequest/sourcereadysamplebuffer(bytrackid:">func sourceReadySampleBuffer(byTrackID: CMPersistentTrackID) -&gt; CMReadySampleBuffer&lt;CMSampleBuffer.DynamicContent&gt;?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정된 트랙 ID의 원본 CMReadySampleBuffer를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avasynchronousvideocompositionrequest/sourcesamplebuffer(bytrackid:">func sourceSampleBuffer(byTrackID: CMPersistentTrackID) -&gt; CMSampleBuffer?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정한 식별자를 포함하는 트랙의 원본 샘플 버퍼를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[var sourceSampleDataTrackIDs: [CMPersistentTrackID]](avasynchronousvideocompositionrequest/sourcesampledatatrackids-3yiab.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">원본 샘플 데이터를 포함하는 트랙의 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avasynchronousvideocompositionrequest/sourcetimedmetadata(bytrackid:">func sourceTimedMetadata(byTrackID: CMPersistentTrackID) -&gt; AVTimedMetadataGroup?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">지정한 식별자를 포함하는 트랙에 대한 원본 타임드 메타데이터 그룹을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[var sourceTrackIDs: [NSNumber]](avasynchronousvideocompositionrequest/sourcetrackids.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">원본 비디오를 포함하는 트랙의 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/sourcetaggeddynamicbuffers(bytrackid:">Apple Developer에서 보기</a>)*</span>
