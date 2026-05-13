---
source_path: "documentation/Accelerate/bnnslossfunctionyolo.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslossfunctionyolo"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnslossfunctionyolo:0000:0001">BNNSLossFunctionYolo</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossfunctionyolo:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossfunctionyolo:0002:0001">You Only Look Once (YOLO) loss computation between prediction and ground truth labels.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossfunctionyolo:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionyolo:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionyolo:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionyolo:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionyolo:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionyolo:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionyolo:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossfunctionyolo:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSLossFunctionYolo: BNNSLossFunction { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">For details on output settings, see <a href="video-settings.md">@@TOKEN_0@@</a> for video connections and <a href="audio-settings.md">@@TOKEN_1@@</a> for audio connections.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmetadatakey/id3metadatakeyalbumtitle.md">static let iTunesMetadata: AVMetadataFormat</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0002"><a href="bnnslossfunction/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0003"><a href="bnnslossfunction/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0004"><a href="bnnslossfunctioncategoricalcrossentropy.md">var BNNSLossFunctionCategoricalCrossEntropy: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Performs categorical cross entropy computation between input prediction and labels.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslossfunctioncosinedistance.md">var BNNSLossFunctionCosineDistance: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Performs cosine distance loss computation between input predictions and labels.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslossfunctionhinge.md">var BNNSLossFunctionHinge: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Performs Hinge loss computation between labels and unbounded zero-centered binary predictions.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslossfunctionhuber.md">var BNNSLossFunctionHuber: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Huber loss computation between input logits and one-hot encoded labels.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnslossfunctionlog.md">var BNNSLossFunctionLog: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Log loss computation between labels and predictions.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnslossfunctionmeanabsoluteerror.md">var BNNSLossFunctionMeanAbsoluteError: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Mean absolute error (MAE) computation between input prediction and labels.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnslossfunctionmeansquareerror.md">var BNNSLossFunctionMeanSquareError: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Mean square error (MSE) computation between input logits and one-hot encoded labels.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnslossfunctionsigmoidcrossentropy.md">var BNNSLossFunctionSigmoidCrossEntropy: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Sigmoid activation on input logits, and independent computation of cross-entropy loss for each class.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnslossfunctionsoftmaxcrossentropy.md">var BNNSLossFunctionSoftmaxCrossEntropy: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Softmax activation on input logits, and computation of cross-entropy loss with one-hot encoded labels.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslossfunctionyolo">View on Apple Developer</a>*</span>
