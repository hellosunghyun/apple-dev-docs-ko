---
source_path: "documentation/AVFoundation/avassetwriter/inputpixelbufferreceiver-forpixelbufferattributes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriter/inputpixelbufferreceiver-forpixelbufferattributes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inputpixelbufferreceiverforpixelbufferattributes:0000:0001">inputPixelBufferReceiver(for:pixelBufferAttributes:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inputpixelbufferreceiverforpixelbufferattributes:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inputpixelbufferreceiverforpixelbufferattributes:0002:0001">입력을 writer에 연결하고 픽셀 버퍼를 작성하기 위한 입력 수신기를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inputpixelbufferreceiverforpixelbufferattributes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inputpixelbufferreceiverforpixelbufferattributes:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputpixelbufferreceiverforpixelbufferattributes:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputpixelbufferreceiverforpixelbufferattributes:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputpixelbufferreceiverforpixelbufferattributes:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputpixelbufferreceiverforpixelbufferattributes:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputpixelbufferreceiverforpixelbufferattributes:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func inputPixelBufferReceiver(for input: AVAssetWriterInput, pixelBufferAttributes attributes: CVPixelBufferCreationAttributes?) -> sending AVAssetWriterInput.PixelBufferReceiver
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">픽셀 버퍼를 작성하기 위한 인터페이스를 가진 writer 입력 수신기입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>input</code>: writer에 연결할 입력입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>attributes</code>: 입력 provider의 pixel buffer pool에서 제공될 pixel buffer의 특성입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetwriter/inputreceiver(for:">func inputReceiver(for: AVAssetWriterInput) -&gt; sending AVAssetWriterInput.SampleBufferReceiver</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">입력을 writer에 연결하고 샘플 버퍼를 작성하기 위한 입력 수신기를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetwriter/inputcaptionreceiver(for:">func inputCaptionReceiver(for: AVAssetWriterInput) -&gt; sending AVAssetWriterInput.CaptionReceiver</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">입력을 writer에 연결하고 캡션 데이터를 작성하기 위한 입력 수신기를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetwriter/inputcaptionreceiverrequestingmultipass(for:">func inputCaptionReceiverRequestingMultiPass(for: AVAssetWriterInput) -&gt; sending (AVAssetWriterInput.CaptionReceiver, AVAssetWriterInput.MultiPassController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">입력을 writer에 연결하고 캡션 데이터를 작성하기 위한 입력 수신기와 연결된 멀티 패스 컨트롤러가 포함된 튜플을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetwriter/inputmetadatareceiver(for:">func inputMetadataReceiver(for: AVAssetWriterInput) -&gt; sending AVAssetWriterInput.MetadataReceiver</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">입력을 writer에 연결하고 시간 기반 메타데이터 그룹을 작성하기 위한 입력 수신기를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetwriter/inputmetadatareceiverrequestingmultipass(for:">func inputMetadataReceiverRequestingMultiPass(for: AVAssetWriterInput) -&gt; sending (AVAssetWriterInput.MetadataReceiver, AVAssetWriterInput.MultiPassController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">입력을 writer에 연결하고 시간 기반 메타데이터 그룹을 작성하기 위한 입력 수신기와 연결된 멀티 패스 컨트롤러가 포함된 튜플을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avassetwriter/inputpixelbufferreceiverrequestingmultipass(for:pixelbufferattributes:">func inputPixelBufferReceiverRequestingMultiPass(for: AVAssetWriterInput, pixelBufferAttributes: CVPixelBufferCreationAttributes?) -&gt; sending (AVAssetWriterInput.PixelBufferReceiver, AVAssetWriterInput.MultiPassController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">입력을 writer에 연결하고 픽셀 버퍼를 작성하기 위한 입력 수신기와 연결된 멀티 패스 컨트롤러가 포함된 튜플을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avassetwriter/inputreceiverrequestingmultipass(for:">func inputReceiverRequestingMultiPass(for: AVAssetWriterInput) -&gt; sending (AVAssetWriterInput.SampleBufferReceiver, AVAssetWriterInput.MultiPassController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">입력을 writer에 연결하고 샘플 버퍼를 작성하기 위한 입력 수신기와 연결된 멀티 패스 컨트롤러가 포함된 튜플을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avassetwriter/inputtaggedpixelbuffergroupreceiver(for:pixelbufferattributes:">func inputTaggedPixelBufferGroupReceiver(for: AVAssetWriterInput, pixelBufferAttributes: CVPixelBufferCreationAttributes?) -&gt; sending AVAssetWriterInput.TaggedPixelBufferGroupReceiver</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">입력을 writer에 연결하고 태그된 픽셀 버퍼를 작성하기 위한 입력 수신기를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avassetwriter/inputtaggedpixelbuffergroupreceiverrequestingmultipass(for:pixelbufferattributes:">func inputTaggedPixelBufferGroupReceiverRequestingMultiPass(for: AVAssetWriterInput, pixelBufferAttributes: CVPixelBufferCreationAttributes?) -&gt; sending (AVAssetWriterInput.TaggedPixelBufferGroupReceiver, AVAssetWriterInput.MultiPassController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">입력을 writer에 연결하고 태그된 픽셀 버퍼를 작성하기 위한 입력 수신기와 연결된 멀티 패스 컨트롤러가 포함된 튜플을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriter/inputpixelbufferreceiver(for:pixelbufferattributes:">Apple Developer에서 보기</a>)*</span>
