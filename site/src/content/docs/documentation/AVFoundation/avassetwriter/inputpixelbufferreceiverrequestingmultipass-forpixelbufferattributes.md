---
source_path: "documentation/AVFoundation/avassetwriter/inputpixelbufferreceiverrequestingmultipass-forpixelbufferattributes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriter/inputpixelbufferreceiverrequestingmultipass-forpixelbufferattributes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inputpixelbufferreceiverrequestingmultipassforpixelbufferattributes:0000:0001">inputPixelBufferReceiverRequestingMultiPass(for:pixelBufferAttributes:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inputpixelbufferreceiverrequestingmultipassforpixelbufferattributes:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inputpixelbufferreceiverrequestingmultipassforpixelbufferattributes:0002:0001">입력을 writer에 연결하고 픽셀 버퍼를 작성할 수 있는 입력 수신기와 연결된 다중 패스 컨트롤러가 포함된 튜플을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inputpixelbufferreceiverrequestingmultipassforpixelbufferattributes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inputpixelbufferreceiverrequestingmultipassforpixelbufferattributes:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputpixelbufferreceiverrequestingmultipassforpixelbufferattributes:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputpixelbufferreceiverrequestingmultipassforpixelbufferattributes:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputpixelbufferreceiverrequestingmultipassforpixelbufferattributes:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputpixelbufferreceiverrequestingmultipassforpixelbufferattributes:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputpixelbufferreceiverrequestingmultipassforpixelbufferattributes:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func inputPixelBufferReceiverRequestingMultiPass(for input: AVAssetWriterInput, pixelBufferAttributes attributes: CVPixelBufferCreationAttributes?) -> sending (AVAssetWriterInput.PixelBufferReceiver, AVAssetWriterInput.MultiPassController)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">픽셀 버퍼를 작성할 수 있는 입력 수신기와 연결된 다중 패스 컨트롤러가 있는 튜플입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>input</code>: writer에 연결할 입력입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>attributes</code>: 입력 공급자의 픽셀 버퍼 풀에서 제공될 픽셀 버퍼의 속성입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avasynchronousvideocompositionrequest/sourceframe(bytrackid:">func inputReceiver(for: AVAssetWriterInput) -&gt; sending AVAssetWriterInput.SampleBufferReceiver</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">입력을 writer에 연결하고 샘플 버퍼를 작성할 수 있는 입력 수신기를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avasynchronousvideocompositionrequest/sourcereadonlypixelbuffer(bytrackid:">func inputCaptionReceiver(for: AVAssetWriterInput) -&gt; sending AVAssetWriterInput.CaptionReceiver</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">입력을 writer에 연결하고 캡션 데이터를 작성할 수 있는 입력 수신기를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetwriter/inputcaptionreceiverrequestingmultipass(for:">func inputCaptionReceiverRequestingMultiPass(for: AVAssetWriterInput) -&gt; sending (AVAssetWriterInput.CaptionReceiver, AVAssetWriterInput.MultiPassController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">입력을 writer에 연결하고 캡션 데이터를 작성할 수 있는 입력 수신기와 관련된 다중 패스 컨트롤러가 포함된 튜플을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetwriter/inputmetadatareceiver(for:">func inputMetadataReceiver(for: AVAssetWriterInput) -&gt; sending AVAssetWriterInput.MetadataReceiver</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">입력을 writer에 연결하고 타임드 메타데이터 그룹을 작성할 수 있는 입력 수신기를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetwriter/inputmetadatareceiverrequestingmultipass(for:">func inputMetadataReceiverRequestingMultiPass(for: AVAssetWriterInput) -&gt; sending (AVAssetWriterInput.MetadataReceiver, AVAssetWriterInput.MultiPassController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">입력을 writer에 연결하고 타임드 메타데이터 그룹을 작성할 수 있는 입력 수신기와 연결된 다중 패스 컨트롤러가 포함된 튜플을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avassetwriter/inputpixelbufferreceiver(for:pixelbufferattributes:">func inputPixelBufferReceiver(for: AVAssetWriterInput, pixelBufferAttributes: CVPixelBufferCreationAttributes?) -&gt; sending AVAssetWriterInput.PixelBufferReceiver</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">입력을 writer에 연결하고 픽셀 버퍼를 작성할 수 있는 입력 수신기를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avassetwriter/inputreceiverrequestingmultipass(for:">func inputReceiverRequestingMultiPass(for: AVAssetWriterInput) -&gt; sending (AVAssetWriterInput.SampleBufferReceiver, AVAssetWriterInput.MultiPassController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">입력을 writer에 연결하고 샘플 버퍼를 작성할 수 있는 입력 수신기와 다중 패스 컨트롤러가 포함된 튜플을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avassetwriter/inputtaggedpixelbuffergroupreceiver(for:pixelbufferattributes:">func inputTaggedPixelBufferGroupReceiver(for: AVAssetWriterInput, pixelBufferAttributes: CVPixelBufferCreationAttributes?) -&gt; sending AVAssetWriterInput.TaggedPixelBufferGroupReceiver</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">입력을 writer에 연결하고 태그된 픽셀 버퍼를 작성할 수 있는 입력 수신기를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avassetwriter/inputtaggedpixelbuffergroupreceiverrequestingmultipass(for:pixelbufferattributes:">func inputTaggedPixelBufferGroupReceiverRequestingMultiPass(for: AVAssetWriterInput, pixelBufferAttributes: CVPixelBufferCreationAttributes?) -&gt; sending (AVAssetWriterInput.TaggedPixelBufferGroupReceiver, AVAssetWriterInput.MultiPassController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">입력을 writer에 연결하고 태그된 픽셀 버퍼를 작성할 수 있는 입력 수신기와 관련된 다중 패스 컨트롤러가 포함된 튜플을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriter/inputpixelbufferreceiverrequestingmultipass(for:pixelbufferattributes:">View on Apple Developer</a>)*</span>
