---
source_path: "documentation/AVFoundation/avasynchronousvideocompositionrequest/attach-to.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/attach-to"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:attachto:0000:0001">attach(_:to:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:attachto:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:attachto:0002:0001">지정한 공간 구성에 픽셀 버퍼를 연결합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:attachto:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:attachto:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:attachto:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:attachto:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:attachto:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:attachto:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:attachto:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func attach(_ spatialVideoConfiguration: AVSpatialVideoConfiguration, to pixelBuffer: inout CVMutablePixelBuffer) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>spatialVideoConfiguration</code>: 픽셀 버퍼와 연결할 공간 구성입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>pixelBuffer</code>: 공간 구성과 연결할 픽셀 버퍼입니다. 참고: 공간 구성은 <code>AVVideoComposition</code>의 <code>spatialConfigurations</code> 속성에 지정된 공간 구성 중 하나여야 합니다. 그렇지 않으면 예외가 발생합니다. 참고: 사용자 지정 컴포지터의 모든 픽셀 버퍼는 동일한 공간 구성에 연결되어 있어야 합니다. 그렇지 않으면 예외가 발생합니다. 영상이 비공간임을 나타내려면 <code>spatialVideoConfiguration</code>에 <code>.nonSpatial</code> 값을 지정합니다. 단, <code>.nonSpatial</code> 구성은 <code>AVVideoComposition/spatialConfigurations</code> 속성에 있어야 하며, 그렇지 않으면 예외가 발생합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avasynchronousvideocompositionrequest/sourceframe(bytrackid:">func sourceFrame(byTrackID: CMPersistentTrackID) -&gt; CVPixelBuffer?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정된 식별자를 포함하는 트랙의 소스 픽셀 버퍼를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avasynchronousvideocompositionrequest/sourcereadonlypixelbuffer(bytrackid:">func sourceReadOnlyPixelBuffer(byTrackID: CMPersistentTrackID) -&gt; CVReadOnlyPixelBuffer?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">주어진 트랙 ID에 대한 소스 <code>CVReadOnlyPixelBuffer</code>를 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0002">트랙에 태그된 버퍼가 포함된 경우 태그 버퍼 중 하나의 픽셀 버퍼가 반환됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avasynchronousvideocompositionrequest/sourcereadysamplebuffer(bytrackid:">func sourceReadySampleBuffer(byTrackID: CMPersistentTrackID) -&gt; CMReadySampleBuffer&lt;CMSampleBuffer.DynamicContent&gt;?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">주어진 트랙 ID에 대한 소스 <code>CMReadySampleBuffer</code>를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avasynchronousvideocompositionrequest/sourcesamplebuffer(bytrackid:">func sourceSampleBuffer(byTrackID: CMPersistentTrackID) -&gt; CMSampleBuffer?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정된 식별자를 포함하는 트랙의 소스 샘플 버퍼를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[var sourceSampleDataTrackIDs: [CMPersistentTrackID]](avasynchronousvideocompositionrequest/sourcesampledatatrackids-3yiab.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">소스 샘플 데이터를 포함하는 트랙의 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[func sourceTaggedDynamicBuffers(byTrackID: CMPersistentTrackID) -&gt; [CMTaggedDynamicBuffer]?](avasynchronousvideocompositionrequest/sourcetaggeddynamicbuffers(bytrackid:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">주어진 트랙 ID에 대한 소스 태그된 동적 버퍼를 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0002">비디오 트랙에 태그된 버퍼가 없거나 트랙에 비디오가 없는 경우 <code>nil</code>을 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0003">이 함수는 <code>supportsSourceTaggedBuffers</code>가 <code>YES</code>인 경우에만 호출해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avasynchronousvideocompositionrequest/sourcetimedmetadata(bytrackid:">func sourceTimedMetadata(byTrackID: CMPersistentTrackID) -&gt; AVTimedMetadataGroup?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">지정된 식별자를 포함하는 트랙의 소스 타임드 메타데이터 그룹을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[var sourceTrackIDs: [NSNumber]](avasynchronousvideocompositionrequest/sourcetrackids.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">소스 비디오를 포함하는 트랙의 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/attach(_:to:">View on Apple Developer</a>)*</span>
