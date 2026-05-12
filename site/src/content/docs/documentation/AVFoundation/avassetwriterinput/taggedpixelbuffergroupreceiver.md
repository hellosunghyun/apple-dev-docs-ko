---
source_path: "documentation/AVFoundation/avassetwriterinput/taggedpixelbuffergroupreceiver.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinput/taggedpixelbuffergroupreceiver"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetwriterinputtaggedpixelbuffergroupreceiver:0000:0001">AVAssetWriterInput.TaggedPixelBufferGroupReceiver</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetwriterinputtaggedpixelbuffergroupreceiver:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetwriterinputtaggedpixelbuffergroupreceiver:0002:0001">입력에 태그가 지정된 픽셀 버퍼를 쓰기 위한 인터페이스를 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetwriterinputtaggedpixelbuffergroupreceiver:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputtaggedpixelbuffergroupreceiver:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputtaggedpixelbuffergroupreceiver:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputtaggedpixelbuffergroupreceiver:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputtaggedpixelbuffergroupreceiver:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputtaggedpixelbuffergroupreceiver:0004:0005">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class TaggedPixelBufferGroupReceiver
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:appending-tagged-buffers:0008:0001">태그가 지정된 버퍼 추가</span>

- <span class="ko-segment" data-segment-id="seg:list:appending-tagged-buffers:0009:0001">[func append([CMTaggedDynamicBuffer], with: CMTime) async throws](avassetwriterinput/taggedpixelbuffergroupreceiver/append(_:with:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appending-tagged-buffers:0010:0001">입력이 더 많은 미디어 데이터를 받을 준비가 될 때까지 대기한 뒤 태그된 픽셀 버퍼를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:appending-tagged-buffers:0011:0001">[func appendImmediately([CMTaggedDynamicBuffer], with: CMTime) throws -&gt; Bool](avassetwriterinput/taggedpixelbuffergroupreceiver/appendimmediately(_:with:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:appending-tagged-buffers:0012:0001">입력이 더 많은 미디어 데이터를 받을 준비가 되어 있으면 태그된 픽셀 버퍼를 동기적으로 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:appending-tagged-buffers:0013:0001"><a href="avassetwriterinput/taggedpixelbuffergroupreceiver/finish.md">func finish()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:appending-tagged-buffers:0014:0001">이 수신기에 더 이상 버퍼를 추가하지 않음을 AVAssetWriter에 알립니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-the-pixel-buffer-pool:0015:0001">픽셀 버퍼 풀 액세스</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-the-pixel-buffer-pool:0016:0001"><a href="avassetwriterinput/taggedpixelbuffergroupreceiver/pixelbufferpool.md">var pixelBufferPool: CVMutablePixelBuffer.Pool?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-the-pixel-buffer-pool:0017:0001">수신기에 추가할 수 있는 픽셀 버퍼 객체를 제공하고 효율적으로 재활용하는 픽셀 버퍼 풀입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-the-pixel-buffer-pool:0018:0001"><a href="avassetwriterinput/taggedpixelbuffergroupreceiver/sourcepixelbufferattributes.md">var sourcePixelBufferAttributes: CVPixelBufferCreationAttributes?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-the-pixel-buffer-pool:0019:0001">수신기의 픽셀 버퍼 풀이 제공할 픽셀 버퍼의 속성입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avassetwriterinput/expectsmediadatainrealtime.md">var expectsMediaDataInRealTime: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">입력이 실시간 소스를 위해 처리 방식이 조정되는지를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avassetwriterinput/isreadyformoremediadata.md">var isReadyForMoreMediaData: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">입력이 미디어 데이터를 수락할 준비가 되었는지를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avassetwriterinput/requestmediadatawhenready(on:using:">func requestMediaDataWhenReady(on: dispatch_queue_t, using: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">입력에서 입력 파일로 쓰기 위해 미디어 데이터를 요청하도록, 입력이 적절한 시점에 요청하도록 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avassetwriterinput/append(_:">func append(CMSampleBuffer) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">출력 파일에 쓰기 위해 샘플 버퍼를 입력에 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avassetwriterinput/markasfinished.md">func markAsFinished()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">샘플 추가가 끝났음을 나타내기 위해 입력을 완료 상태로 표시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avassetwriterinput/samplebufferreceiver.md">AVAssetWriterInput.SampleBufferReceiver</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">입력에 샘플 버퍼를 쓰기 위한 인터페이스를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="avassetwriterinput/pixelbufferreceiver.md">AVAssetWriterInput.PixelBufferReceiver</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">입력에 픽셀 버퍼를 쓰기 위한 인터페이스를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="avassetwriterinput/metadatareceiver.md">AVAssetWriterInput.MetadataReceiver</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">입력에 타임스탬프가 지정된 메타데이터 그룹을 쓰기 위한 인터페이스를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="avassetwriterinput/captionreceiver.md">AVAssetWriterInput.CaptionReceiver</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">입력에 캡션 데이터를 쓰기 위한 인터페이스를 제공합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinput/taggedpixelbuffergroupreceiver">View on Apple Developer</a>*</span>
